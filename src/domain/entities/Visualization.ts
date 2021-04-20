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
    readonly description: string,
    readonly category: string,
    readonly type: VisualizationType,
    readonly query: DatasetQuery,
    readonly parserType: { type: string, data: unknown },
    readonly linkAlias: string,
    readonly notes: string[],
    readonly source?: { title: string, link: string},
    readonly period?: string
  ) {
        
  }

  async display(city: City) : Promise<unknown> {
    const parser = VisualizationParserFactory.build(this);

    this.query.applyScope(city);

    return parser.parse(await this.query.execute(), this);
  }

  async generateTable(city: City) : Promise<unknown> {
    const parser = new TableParser();

    this.query.applyScope(city);
    
    const result = await this.query.execute();

    return parser.parse(result);
  }

  async generateData(city: City) : Promise<unknown> {
    this.query.applyScope(city);
    
    const result = await this.query.execute();

    return result;
  }

  getDataset() {
    return this.query.getDataset();
  }
}