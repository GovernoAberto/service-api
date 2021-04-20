import { ApiFactory } from '@domain/factories/ApiFactory';
import { VisualizationRepository } from '@repositories/VisualizationRepository';
import { Request, Response } from 'express';
import { CityRepository } from '@repositories/CityRepository';
import { VisualizationType } from '@entities/Visualization';
import { TableParser } from '@entities/parsers/TableParser';
import { CsvParser } from '@entities/parsers/CsvParser';
import { JsonParser } from '@entities/parsers/JsonParser';
import BaseError from '@exceptions/BaseError';
import presentVisualization from '@presenters/presentVisualization';
import presentVisualizationTable from '@presenters/presentVisualizationTable';
import presentVisualizationCsv from '@presenters/presentVisualizationCsv';
import presentVisualizationJson from '@presenters/presentVisualizationJson';

class DatasetController
{

  categories(req: Request, res: Response) {
    res.send([
      { label: 'Todas categorias', btn_class: 'btn-light', btn_alt_class: 'btn-outline-dark', icon: null },
      { label: 'Governo', btn_class: 'btn-secondary', btn_alt_class: 'btn-outline-secondary', icon: 'building' },
      { label: 'Saúde', btn_class: 'btn-primary', btn_alt_class: 'btn-outline-primary', icon: 'ambulance' },
      { label: 'Economia', btn_class: 'btn-warning', btn_alt_class: 'btn-outline-warning', icon: 'dollar-sign' },
      { label: 'Educação', btn_class: 'btn-success', btn_alt_class: 'btn-outline-success', icon: 'book' },
      { label: 'Transporte', btn_class: 'btn-danger', btn_alt_class: 'btn-outline-danger', icon: 'bus' }
    ]);
  }
    
  async dataset(req: Request, res: Response) {
    try{
      const city = await new CityRepository().findById(Number(req.query.city));
      const factory = await new ApiFactory().load();

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
    } catch (error) {
      DatasetController.handleErrors(error, res);
    }
  }

  async downloadDataset(req: Request, res: Response) {
    try{
      const city = await new CityRepository().findById(Number(req.query.city));
      const factory = await new ApiFactory().load();
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
    } catch (error) {
      DatasetController.handleErrors(error, res);
    }
  }

  async downloadVisualizationTable(req: Request, res: Response) {
    try{
      const city = await new CityRepository().findById(Number(req.query.city));
      const factory = await new ApiFactory().load();
      const visualization = await new VisualizationRepository(factory).findByAlias(req.params.alias);

      switch (req.params.format) {
      case 'csv':
        res.send(await presentVisualizationCsv(visualization, city, res));
        break;
      case 'json':
        res.send(await presentVisualizationJson(visualization, city, res));
        break;
      default:
        throw new Error("Erro");
        break;
      }

    } catch (error) {
      DatasetController.handleErrors(error, res);
    }
  }

  async visualization(req: Request, res: Response) {
    try{
      const city = await new CityRepository().findById(Number(req.query.city));
      const factory = await new ApiFactory().load();
      const visualization = await new VisualizationRepository(factory).findByAlias(req.params.alias);

      res.send(await presentVisualization(visualization, city));
    } catch (error) {
      DatasetController.handleErrors(error, res);
    }
  }

  async tableByVisualization(req: Request, res: Response) {
    try{
      const city = await new CityRepository().findById(Number(req.query.city));
      const factory = await new ApiFactory().load();
      const visualization = await new VisualizationRepository(factory).findByAlias(req.params.alias);

      res.send(await presentVisualizationTable(visualization, city));
    } catch (error) {
      DatasetController.handleErrors(error, res);
    }
  }

  async visualizations(req: Request, res: Response) {
    try {
      const city = await new CityRepository().findByAlias(String(req.query.state), String(req.query.city));
      const factory = await new ApiFactory().load();

      const charts = await new VisualizationRepository(factory).filter(
        VisualizationType.CHART, 
        req.query.category == undefined ? '' : String(req.query.category).trim(), 
        req.query.title == undefined ? '' : String(req.query.title).trim()
      );

      const promises = charts.map(chart => presentVisualization(chart, city));
      
      res.send(await Promise.all(promises));
    } catch (error) {
      DatasetController.handleErrors(error, res);
    }
  }

  private static handleErrors(error, response) {
    if(error instanceof BaseError)
      error.renderHttpResponse(response);
    else
      throw error;
  }
}

export default new DatasetController();