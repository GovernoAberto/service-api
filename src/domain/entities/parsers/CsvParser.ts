import { ResultSet } from "@cubejs-client/core";
import { VisualizationParser } from "./VisualizationParser";

export class CsvParser extends VisualizationParser {
  type = "csv";

  constructor(private config?: { type: string, data: unknown }) {
    super();
  }

  parse(data: any) : unknown{
    const tableColumns = data.tableColumns();
    const tableData = data.tablePivot();
    
    if(tableData.length == 0) return [];

    let csv = "";
    csv += tableColumns.map(column => column.shortTitle).join(";") + "\n";
    tableData.forEach((row) => { csv += Object.values(row).join(";") + "\n"; });
    
    return csv;
  }
}
