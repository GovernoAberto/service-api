import { Visualization } from "@entities/Visualization";
import { VisualizationParser } from "../VisualizationParser";

export class LineChartParser extends VisualizationParser {
  type = "line-chart";

  constructor(private config:{ type: string, data: unknown }) {
    super();
  }

  parse(data: any, visualization: Visualization) : unknown{
    const width = (data.categories().length > 15) ? 1 : 5;
    
    return {
      type: this.config.type,
      renderer: 'chartjs',
      result: {
        labels: data.categories().map((c) => c.category),
        datasets: data.series().map((s, index) => ({
          label: s.title,
          data: s.series.map((r) => r.value),
          borderColor: 'rgb(75, 192, 192)',
          pointBorderWidth: width,
          pointHoverBorderWidth: width,
          fill: false,
        }))
      }
    };
  }
}