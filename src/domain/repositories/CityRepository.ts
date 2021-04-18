import { City } from "@entities/City";
import { State } from "@entities/State";
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
    const cities = await this.mongoDB.find({ "state.alias": alias });

    return cities;
  }

  async findByAlias(stateAlias: string, cityAlias:string) : Promise<City> {
    const city = await this.mongoDB.findOne({ 
      "alias": cityAlias,
      "state.alias": stateAlias
    });

    return city;
  }

  async findById(id: number) : Promise<City> {
    const city = await this.mongoDB.findOne({ "id": id });

    return city;
  }
}