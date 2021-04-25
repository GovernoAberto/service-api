import EventModel from "@infra/database/mongodb/EventModel";

export class EventRepository{

  private mongoDB: typeof EventModel;

  constructor() {
    this.mongoDB = EventModel;
  }

  async add(event: { ip: string, url: string, region?: string, city?: string, client?: any }) : Promise<any> {
    return await this.mongoDB.create({ ...event, date: new Date().toISOString() });
  }
}