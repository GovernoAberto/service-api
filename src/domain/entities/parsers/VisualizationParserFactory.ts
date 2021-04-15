import { Visualization } from "../../entities/Visualization";
import { ChartParser } from "./ChartParser";
import { NumberParser } from "./NumberParser";
import { TableParser } from "./TableParser";
import { VisualizationParser } from "./VisualizationParser";

export class VisualizationParserFactory {

  static build(visualization: Visualization) : VisualizationParser {
    
    if(visualization.type == 'table') {
      return new TableParser(visualization.parserType);
    }

    if(visualization.type == 'chart') {
      return new ChartParser(visualization.parserType);
    }

    if(visualization.type == 'number') {
      return new NumberParser(visualization.parserType);
    }

    throw new Error('Parser not founded');
  }

}