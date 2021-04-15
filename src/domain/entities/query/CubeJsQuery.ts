import { Query, ResultSet } from "@cubejs-client/core";
import { ApiFactory } from "@domain/factories/ApiFactory";
import { Dataset } from "../../entities/Dataset";
import { DatasetQuery } from "./DatasetQuery";

export class CubeJsQuery implements DatasetQuery {
  
  private data:unknown;

  constructor(readonly dataset: Dataset, readonly query: Query, private factory: ApiFactory) {

  }

  process(): Query {
    return JSON.parse(JSON.stringify(this.query).split("${1}").join(this.dataset.name));
  }

  async execute() : Promise<ResultSet>{
    return this.factory.executeQuery(this.dataset, this);
  }

  addFilter(field:string, value:string) : void {
    if(!this.query.filters) this.query.filters = [];

    this.query.filters.push({
      member: '${1}.' + field,
      operator: 'equals',
      values: [value]
    });
  }
}