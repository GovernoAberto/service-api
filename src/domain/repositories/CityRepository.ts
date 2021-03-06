import { City } from "@entities/City";
import { CityNotFound } from "@exceptions/Exceptions";
import CityModel from "@infra/database/mongodb/CityModel";

export class CityRepository{

  private mongoDB: typeof CityModel;

  constructor() {
    this.mongoDB = CityModel;
  }

  async all() : Promise<City[]> {
    const cities = await this.mongoDB.find();

    return cities;
  }

  async findByState(alias:string) : Promise<City[]> {
    const cities = await this.mongoDB.find({ "state.alias": alias }).sort({ "name" : 1 }).exec();

    if(cities.length == 0)
      throw new CityNotFound();

    return cities;
  }

  async findByAlias(stateAlias: string, cityAlias:string) : Promise<City> {
    const city = await this.mongoDB.findOne({ 
      "alias": cityAlias,
      "state.alias": stateAlias
    });

    if(!city)
      throw new CityNotFound();

    return city;
  }

  async findByStateAndName(stateAlias: string, cityName:string) : Promise<City> {
    const city = await this.mongoDB.findOne({ 
      "name": cityName,
      "state.alias": stateAlias
    });

    return city;
  }

  async findById(id: number) : Promise<City> {
    if(!id) { throw new CityNotFound(); }

    const city = await this.mongoDB.findOne({ "id": id });

    if(!city)
      throw new CityNotFound();

    return city;
  }
}