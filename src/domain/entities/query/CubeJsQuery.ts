import { Query, ResultSet } from "@cubejs-client/core";
import { ApiFactory } from "@domain/factories/ApiFactory";
import { City } from "@entities/City";
import { Dataset } from "../../entities/Dataset";
import { DatasetQuery } from "./DatasetQuery";

export class CubeJsQuery implements DatasetQuery {
  
  private data:any;

  constructor(readonly dataset: Dataset, public query: Query, private factory: ApiFactory) {

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

  applyPagination(page: number, perPage = 20) : void {
    if(isNaN(page) || isNaN(perPage)) {
      throw new Error("Not a number");
    }

    this.query.limit = perPage,
    this.query.offset = perPage * (page - 1);
  }

  applyScope(city: City) : void {
    const scope = this.dataset.getScope();
    
    let scopeValue = "";

    if(scope.columnType == 'ibge')
      scopeValue = String(city.ibgeCode);
    else if (scope.columnType == 'siafi')
      scopeValue = String(city.siafiCode);
    else
      throw new Error("Invalid cube scope");

    if(!this.query.filters) this.query.filters = [];
    
    this.query.filters.push({
      member: scope.column,
      operator: 'equals',
      values: [ scopeValue ]
    });
  }

  getDataset() {
    return this.dataset;
  }
}