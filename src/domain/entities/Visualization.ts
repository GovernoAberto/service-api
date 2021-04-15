import { DatasetQuery } from "./query/DatasetQuery";
import { VisualizationParserFactory } from "./parsers/VisualizationParserFactory";

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
    readonly parserType: { type: string, data: unknown }
  ) {
        
  }

  async display(scopeValue:string) : Promise<unknown> {
    const parser = VisualizationParserFactory.build(this);

    this.query.addFilter(this.scope.column, scopeValue);

    return parser.parse(await this.query.execute(), this);
  }
}