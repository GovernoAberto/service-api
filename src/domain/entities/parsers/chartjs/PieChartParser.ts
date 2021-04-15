import { Visualization } from "@entities/Visualization";
import { VisualizationParser } from "../VisualizationParser";

export class PieChartParser extends VisualizationParser {
  type = "pie-charjs";

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
        datasets: data.series().map((s) => ({
          label: s.title,
          data: s.series.map((r) => r.value),
          backgroundColor: colors,
          hoverBackgroundColor: colors,
        })),
      }
    };
  }
}