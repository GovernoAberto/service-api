import { CityRepository } from '@repositories/CityRepository';
import { StateRepository } from '@repositories/StateRepository';
import { Request, Response } from 'express';

class CityController
{
  async states(req: Request, res: Response) {
    const respository = new StateRepository();
    res.send(await respository.all());
  }
    
  async cities(req: Request, res: Response) {
    const cityRepository = new CityRepository();
    
    const cities = await cityRepository.findByState(req.params.alias);

    res.send(cities);
  }

  async cityInfo(req: Request, res: Response) {
    const cityRepository = new CityRepository();

    const city = await cityRepository.findByAlias(req.params.state, req.params.city);
        
    res.send({
      state: city.state,
      city: city
    });
  }
}

export default new CityController();