import BaseError from '@exceptions/BaseError';
import { CityRepository } from '@repositories/CityRepository';
import { StateRepository } from '@repositories/StateRepository';
import { Request, Response } from 'express';

class CityController
{
  async states(req: Request, res: Response) {
    try {
      res.send(await new StateRepository().all());

    } catch (error) {
      CityController.handleErrors(error, res);
    }
  }
    
  async cities(req: Request, res: Response) {
    try {
      
      const cities = await new CityRepository().findByState(req.params.alias);
      res.send(cities);

    } catch (error) {
      CityController.handleErrors(error, res);
    }
  }

  async cityInfo(req: Request, res: Response) {
    try {

      const city = await new CityRepository().findByAlias(req.params.state, req.params.city);
      res.send({
        state: city.state,
        city: city
      });

    } catch (error) {
      CityController.handleErrors(error, res);
    }
  }

  static handleErrors(error, response) {
    if(error instanceof BaseError)
      error.renderHttpResponse(response);
    else
      throw error;
  }
}

export default new CityController();