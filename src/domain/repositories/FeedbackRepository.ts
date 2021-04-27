import FeedbackModel from "@infra/database/mongodb/FeedbackModel";
import { FeedbackError } from "@exceptions/Exceptions";
import { formatISO } from "date-fns";

export class FeedbackRepository{

  private mongoDB: typeof FeedbackModel;

  constructor() {
    this.mongoDB = FeedbackModel;
  }

  async add(visualization: string, comment: string, contact: string) : Promise<boolean> {
    try {
      await this.mongoDB.create({
        visualization: visualization,
        comment: comment,
        contact: contact,
        date: formatISO(new Date())
      });
      
      return true;
      
    } catch (error) {
      throw new FeedbackError();
    }
  }
}