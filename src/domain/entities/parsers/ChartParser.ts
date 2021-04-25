import { Visualization, VisualizationType } from "../../entities/Visualization";
import { BarChartParser } from "./chartjs/BarChartParser";
import { LineChartParser } from "./chartjs/LineChartParser";
import { PieChartParser } from "./chartjs/PieChartParser";
import { VisualizationParser } from "./VisualizationParser";

export class ChartParser extends VisualizationParser {
  type = "charjs";

  constructor(private config:{ type: string, data: unknown }) {
    super();
  }

  parse(data: any, visualization: Visualization) : unknown{
    if(this.config.type == 'bar-chart') {
      return new BarChartParser(this.config).parse(data, visualization);
    }

    if(this.config.type == 'line-chart') {
      return new LineChartParser(this.config).parse(data, visualization);
    }

    if(this.config.type == 'pie-chart' || this.config.type == 'money-pie-chart') {
      return new PieChartParser(this.config).parse(data, visualization);
    }

    throw new Error("Parser not founded");
  }
}