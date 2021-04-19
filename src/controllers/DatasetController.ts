import { ApiFactory } from '@domain/factories/ApiFactory';
import { VisualizationRepository } from '@repositories/VisualizationRepository';
import { Request, Response } from 'express';
import { CityRepository } from '@repositories/CityRepository';
import { VisualizationType } from '@entities/Visualization';
import { DatasetRepository } from '@repositories/DatasetRepository';
import { TableParser } from '@entities/parsers/TableParser';
import { CsvParser } from '@entities/parsers/CsvParser';
import { VisualizationParser } from '@entities/parsers/VisualizationParser';
import { JsonParser } from '@entities/parsers/JsonParser';

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
    
  async dataset(req: Request, res: Response) {
    const factory = new ApiFactory();

    const cityRepository = new CityRepository();
    const city = await cityRepository.findById(Number(req.query.city));
    
    factory.load().then(async () => {
      const dataset = factory.getDataset(req.params.name);

      const query = await factory.selectAll(dataset, Number(req.query.page));
      query.applyScope(city);
      
      if(req.query.page) {
        const perPage = req.query.perPage ? Number(req.query.perPage) : 20;
        query.applyPagination(Number(req.query.page), perPage);
      }
      
      const result = await query.execute();
      const parser = new TableParser({});
      
      res.send(parser.parse(result));
    });
  }

  async downloadDataset(req: Request, res: Response) {
    const factory = new ApiFactory();

    const cityRepository = new CityRepository();
    const city = await cityRepository.findById(Number(req.query.city));
    
    factory.load().then(async () => {
      const dataset = factory.getDataset(req.params.name);

      const query = await factory.selectAll(dataset, Number(req.query.page));
      query.applyScope(city);
      
      const result = await query.execute();
      let parser;
      if(req.params.format == 'csv') {
        parser = new CsvParser({});
        res.set('Content-disposition', 'attachment; filename=' + dataset.title + ".csv");
        res.set('Content-Type', 'text/csv');
      } 
      
      if(req.params.format == 'json') {
        parser = new JsonParser({});
        res.set('Content-disposition', 'attachment; filename=' + dataset.title + ".json");
        res.set('Content-Type', 'text/json');
      }

      res.send(parser.parse(result));
    });
  }

  downloadVisualizationTable(req: Request, res: Response) {
    const alias = req.params.alias;

    const factory = new ApiFactory();

    factory.load().then(async () => {
      const repository = new VisualizationRepository(factory);
      const visualization = await repository.findByAlias(alias);

      const cityRepository = new CityRepository();
      const city = await cityRepository.findById(Number(req.query.city));
      
      if(!city) res.status(500).send("Erro");

      const result = await visualization.generateData(city);
      let parser;

      if(req.params.format == 'csv') {
        parser = new CsvParser({});
        res.set('Content-disposition', 'attachment; filename=' + visualization.title + ' - ' +  city.name + ".csv");
        res.set('Content-Type', 'text/csv');
      } 
      
      if(req.params.format == 'json') {
        parser = new JsonParser({});
        res.set('Content-disposition', 'attachment; filename=' + visualization.title + ' - ' +  city.name + ".json");
        res.set('Content-Type', 'text/json');
      }

      res.send(parser.parse(result));
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
        linkAlias: visualization.linkAlias,
        title: visualization.title, 
        description: visualization.description,
        category: visualization.category,
        type: visualization.type,
        dataset: {
          name: visualization.getDataset().name,
          title: visualization.getDataset().title,
        },
        data: result,
        notes: visualization.notes,
        source: visualization.source,
        period: visualization.period
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
          linkAlias: charts[i].linkAlias,
          title: charts[i].title, 
          description: charts[i].description, 
          category: charts[i].category,
          type: charts[i].type,
          data: chartData[i],
          notes: charts[i].notes,
          source: charts[i].source,
          period: charts[i].period
        });
      }
      
      res.send(response);
    }).catch(error => {
      console.log(error);
    });
  }
}

export default new DatasetController();