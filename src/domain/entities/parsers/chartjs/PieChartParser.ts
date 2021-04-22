import { Visualization } from "@entities/Visualization";
import { VisualizationParser } from "../VisualizationParser";

export class PieChartParser extends VisualizationParser {
  type = "pie-charjs";

  constructor(private config:{ type: string, data: unknown }) {
    super();
  }

  parse(data: any, visualization: Visualization) : unknown{
    const pallete = [
      ['#FF6492'],
      ['#BEBADA', '#E41A1C'],
      ['#FF6492', '#141446', '#7A77FF'],
      ['#E41A1C', '#377EB8', '#4DAF4A', '#984EA3'],
      ['#E41A1C', '#377EB8', '#4DAF4A', '#984EA3', '#FF7F00'],
      ['#E41A1C', '#377EB8', '#4DAF4A', '#984EA3', '#FF7F00', '#FFFF33'],
      ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462', '#B3DE69'],
      ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462', '#B3DE69', '#FCCDE5'],
      ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462', '#B3DE69', '#FCCDE5', '#D9D9D9'],
      ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462', '#B3DE69', '#FCCDE5', '#D9D9D9', '#BC80BD'],
      ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462', '#B3DE69', '#FCCDE5', '#D9D9D9', '#BC80BD', '#CCEBC5'],
      ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462', '#B3DE69', '#FCCDE5', '#D9D9D9', '#BC80BD', '#CCEBC5', '#FFED6F'],
    ];
    
    const colors = data.categories().length <= 12 ? pallete[data.categories().length - 1] : pallete[11];

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