import { VisualizationParser } from "./VisualizationParser";

export class TableParser extends VisualizationParser {
  type = "table";

  constructor(private config:unknown) {
    super();
  }

  parse(data: any) : unknown{
    const table = data.tablePivot();

    return table.map((key) => {
      return key;
    });
  }
}
