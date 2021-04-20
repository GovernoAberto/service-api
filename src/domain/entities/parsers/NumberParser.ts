import { Visualization } from "../../entities/Visualization";
import { VisualizationParser } from "./VisualizationParser";

export class NumberParser extends VisualizationParser {
  type = "number";

  constructor(private config: { type: string, data: any }) {
    super();
  }

  parse(data: any, visualization: Visualization) : unknown{
    const table = data.tablePivot();

    if(table.length == 0) return {}; 

    return {
      label: visualization.title,
      format: (this.config.data.format != undefined) ? this.config.data.format : 'number',
      value: table[0][Object.keys(table[0])[0]]
    };
  }
}