import { ApiFactory } from '@domain/factories/ApiFactory';
import { VisualizationRepository } from '@repositories/VisualizationRepository';
import { Request, Response } from 'express';
import { CityRepository } from '@repositories/CityRepository';
import { VisualizationType } from '@entities/Visualization';

class DatasetController
{

  categories(req: Request, res: Response) {
    res.send([
      { label: 'Todas categorias', btn_class: 'btn-light', btn_alt_class: 'btn-outline-dark', icon: null },
      { label: 'Contas Públicas', btn_class: 'btn-secondary', btn_alt_class: 'btn-outline-secondary', icon: 'building' },
      { label: 'Saúde', btn_class: 'btn-primary', btn_alt_class: 'btn-outline-primary', icon: 'ambulance' },
      { label: 'Economia', btn_class: 'btn-warning', btn_alt_class: 'btn-outline-warning', icon: 'dollar-sign' },
      { label: 'Educação', btn_class: 'btn-success', btn_alt_class: 'btn-outline-success', icon: 'book' },
      { label: 'Transporte', btn_class: 'btn-danger', btn_alt_class: 'btn-outline-danger', icon: 'bus' }
    ]);
  }
    
  datasets(req: Request, res: Response) {
    const factory = new ApiFactory();
    
    factory.load().then(async () => {
      const repository = new VisualizationRepository(factory);
      
      console.log(await repository.findByAlias('empresas-por-porte'));

      const visualizations = await repository.all();

      const result = await visualizations[1].display("8801");

      res.send(result);
    });
  }

  visualization(req: Request, res: Response) {
    const alias = req.params.alias;

    const factory = new ApiFactory();

    factory.load().then(async () => {
      const repository = new VisualizationRepository(factory);
      const visualization = await repository.findByAlias(alias);

      const cityRepository = new CityRepository();
      
      const city = await cityRepository.findById(Number(req.query.city));
      
      if(!city) res.status(500).send("Erro");

      const result = await visualization.display(city);

      res.send({
        alias: visualization.alias,
        title: visualization.title, 
        category: visualization.category,
        dataset: {
          name: visualization.getDataset().name,
          title: visualization.getDataset().title,
        },
        data: result
      });
    });

  }

  tableByVisualization(req: Request, res: Response) {
    const alias = req.params.alias;

    const factory = new ApiFactory();

    factory.load().then(async () => {
      const repository = new VisualizationRepository(factory);
      const visualization = await repository.findByAlias(alias);

      const cityRepository = new CityRepository();
      const city = await cityRepository.findById(Number(req.query.city));
      
      if(!city) res.status(500).send("Erro");

      const result = await visualization.generateTable(city);

      res.send({
        alias: visualization.alias, 
        title: visualization.title, 
        category: visualization.category,
        data: result
      });
    });

  }

  async visualizations(req: Request, res: Response) {
    const city = await new CityRepository().findByAlias(String(req.query.state), String(req.query.city));

    const factory = new ApiFactory();
    factory.load().then(async () => {
      const repository = new VisualizationRepository(factory);

      const charts = await repository.findByType(VisualizationType.CHART);
      const chartData = await Promise.all(charts.map(chart => chart.display(city)));

      const response = [];
      for (let i = 0; i < charts.length; i++) {
        response.push({ 
          alias: charts[i].alias, 
          title: charts[i].title, 
          category: charts[i].category,
          data: chartData[i]
        });
      }
      
      res.send(response);
    }).catch(error => {
      console.log(error);
    });
  }
}

export default new DatasetController();