import { ResultSet } from "@cubejs-client/core";
import { VisualizationParser } from "./VisualizationParser";

export class JsonParser extends VisualizationParser {
  type = "table";

  constructor(private config:unknown) {
    super();
  }

  parse(data: ResultSet) : unknown{
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
