import { ResultSet } from "@cubejs-client/core";
import { VisualizationParser } from "./VisualizationParser";

export class TableParser extends VisualizationParser {
  type = "table";

  constructor(private config?: { type: string, data: unknown }) {
    super();
  }

  parse(data) : unknown{
    const tableColumns = data.tableColumns();
    const tableData = data.tablePivot();
    
    if(tableData.length == 0) return [];

    const table = tableColumns.map(column => {
      return {
        title: column.shortTitle,
        type: column.type,
        data: [],
        key: column.key,
      };
    });

    tableData.forEach((row) => {
      table.forEach(column => {
        column.data.push(row[column.key]);
      });
    });
    
    return table;
  }
}
