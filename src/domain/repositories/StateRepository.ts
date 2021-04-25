import { State } from "@entities/State";
import StateModel from "@infra/database/mongodb/StateModel";

export class StateRepository{

  private mongoDB: typeof StateModel;

  constructor() {
    this.mongoDB = StateModel;
  }

  async all() : Promise<State[]> {
    const states = await this.mongoDB.find();

    return states;
  }

  async findByAlias(alias:string) : Promise<State> {
    const state = await this.mongoDB.findOne({ alias: alias });

    return state;
  }

  async findByName(name:string) : Promise<State> {
    const state = await this.mongoDB.findOne({ name: name });

    return state;
  }
}