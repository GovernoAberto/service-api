import { ApiFactory } from '@domain/factories/ApiFactory';
import { VisualizationRepository } from '@repositories/VisualizationRepository';
import { Request, Response } from 'express';
import { CityRepository } from '@repositories/CityRepository';
import { VisualizationType } from '@entities/Visualization';

class DatasetController
{

  categories(req: Request, res: Response) {
    res.send([
      { label: 'Todas categorias', btn_class: 'btn-light', icon: null },
      { label: 'Contas Públicas', btn_class: 'btn-secondary', icon: 'building' },
      { label: 'Saúde', btn_class: 'btn-primary', icon: 'ambulance' },
      { label: 'Economia', btn_class: 'btn-warning', icon: 'dollar-sign' },
      { label: 'Educação', btn_class: 'btn-success', icon: 'book' },
      { label: 'Segurança', btn_class: 'btn-dark', icon: 'user-shield' },
      { label: 'Transporte', btn_class: 'btn-danger', icon: 'bus' }
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

      let result;

      if(visualization.scope.columnType == 'ibge') {
        result = await visualization.display(String(city.ibgeCode));
      } else {
        result = await visualization.display(String(city.siafiCode));
      }
      res.send(result);
    });

  }


  visualizations(req: Request, res: Response) {
    const factory = new ApiFactory();
    factory.load().then(async () => {
      const repository = new VisualizationRepository(factory);

      const charts = await repository.findByType(VisualizationType.CHART);

      res.send(charts.map(chart => { 
        return { alias: chart.alias, title: chart.title, category: chart.category };
      }));
    }).catch(error => {
      console.log(error);
    });

    // const visualizations = [
    //   { id: 1, title: "Evolução da frota de veículos 1", category: "Saúde" },
    //   // { id: 2, title: "Evolução da frota de veículos 2", category: "Educação" },
    //   // { id: 3, title: "Evolução da frota de veículos 3", category: "Segurança" },
    //   // { id: 4, title: "Evolução da frota de veículos 4", category: "Trânsito" },
    //   // { id: 5, title: "Evolução da frota de veículos 5", category: "Trânsito" },
    //   // { id: 6, title: "Evolução da frota de veículos 6", category: "Trânsito" },
    //   // { id: 7, title: "Evolução da frota de veículos 7", category: "Trânsito" },
    //   // { id: 8, title: "Evolução da frota de veículos 8", category: "Trânsito" },
    //   // { id: 9, title: "Evolução da frota de veículos 9", category: "Trânsito" },
    // ];

    // res.send(visualizations);
  }
}

export default new DatasetController();