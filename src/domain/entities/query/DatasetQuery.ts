import { Query, ResultSet } from "@cubejs-client/core";
import { ApiFactory } from "@domain/factories/ApiFactory";
import { Dataset } from "../../entities/Dataset";

export interface DatasetQuery {
  process();
  execute() : Promise<unknown>;
  addFilter(field: string, value: string);
}