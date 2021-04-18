import { DatasetQuery } from "./query/DatasetQuery";
import { VisualizationParserFactory } from "./parsers/VisualizationParserFactory";
import { City } from "./City";
import { TableParser } from "./parsers/TableParser";

export enum VisualizationType {
    TABLE = 'table',
    CHART = 'chart',
    NUMBER = 'number',
}

export class Visualization {

  constructor(
    readonly alias: string,
    readonly title: string,
    readonly category: string,
    readonly type: VisualizationType,
    readonly scope: { type: string, column: string, columnType: string },
    readonly query: DatasetQuery,
    readonly parserType: { type: string, data: unknown },
    readonly linkAlias: string
  ) {
        
  }

  async display(city: City) : Promise<unknown> {
    const scopeValue = this.scope.columnType == "ibge" ? String(city.ibgeCode) : String(city.siafiCode);

    const parser = VisualizationParserFactory.build(this);

    this.query.addFilter(this.scope.column, scopeValue);

    return parser.parse(await this.query.execute(), this);
  }

  async generateTable(city: City) : Promise<unknown> {
    const scopeValue = this.scope.columnType == "ibge" ? String(city.ibgeCode) : String(city.siafiCode);
    
    this.query.addFilter(this.scope.column, scopeValue);

    const parser = new TableParser({});
    const result = await this.query.execute();

    return parser.parse(result);
  }

  getDataset() {
    return this.query.getDataset();
  }
}