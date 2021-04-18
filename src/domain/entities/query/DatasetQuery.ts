import { Query, ResultSet } from "@cubejs-client/core";
import { ApiFactory } from "@domain/factories/ApiFactory";
import { City } from "@entities/City";
import { Dataset } from "../../entities/Dataset";

export interface DatasetQuery {
  process();
  execute() : Promise<unknown>;
  addFilter(field: string, value: string);
  getDataset() : Dataset;
  applyPagination(page: number, perPage?: number) : void;
  applyScope(city: City) : void;
}