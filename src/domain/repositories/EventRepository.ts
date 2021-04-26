import EventModel from "@infra/database/mongodb/EventModel";
import { formatISO } from "date-fns";

export class EventRepository{

  private mongoDB: typeof EventModel;

  constructor() {
    this.mongoDB = EventModel;
  }

  async add(event: { ip: string, url: string, params: any, region?: string, city?: string, client?: any }) : Promise<any> {
    return await this.mongoDB.create({ ...event, date: formatISO(new Date()) });
  }
}