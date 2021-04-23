import { CityRepository } from '@repositories/CityRepository';
import { StateRepository } from '@repositories/StateRepository';
import { Request, Response } from 'express';

class CityController
{
  async states(req: Request, res: Response, next) {
    try {
      res.send(await new StateRepository().all());

    } catch (error) {
      next(error);
    }
  }
    
  async cities(req: Request, res: Response, next) {
    try {
      const cities = await new CityRepository().findByState(req.params.alias);

      res.send(cities);

    } catch (error) {
      next(error);
    }
  }

  async cityInfo(req: Request, res: Response, next) {
    try {
      const city = await new CityRepository().findByAlias(req.params.state, req.params.city);

      res.send({ state: city.state, city: city });

    } catch (error) {
      next(error);
    }
  }
}

export default new CityController();