import { Visualization } from "@entities/Visualization";
import { VisualizationParser } from "../VisualizationParser";

export class BarChartParser extends VisualizationParser {
  type = "bar-chart";

  constructor(private config:{ type: string, data: unknown }) {
    super();
  }

  parse(data: any, visualization: Visualization) : unknown{
    const colors = ['#FF6492', '#141446', '#7A77FF'];

    return {
      type: this.config.type,
      renderer: 'chartjs',
      result: {
        labels: data.categories().map((c) => c.category),
        datasets: data.series().map((s, index) => ({
          label: s.title,
          data: s.series.map((r) => r.value),
          borderColor: colors[index],
          fill: false,
        }))
      }
    };
  }
}