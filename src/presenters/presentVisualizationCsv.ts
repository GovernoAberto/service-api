import { City } from "@entities/City";
import { CsvParser } from "@entities/parsers/CsvParser";
import { Visualization } from "@entities/Visualization";
import { Response } from "express";

export default async function (visualization: Visualization, city: City, response: Response) : Promise<unknown> {
  response.set('Content-disposition', 'attachment; filename=' + visualization.title + ' - ' +  city.name + ".csv");
  response.set('Content-Type', 'text/csv');

  const parser = new CsvParser();
  return parser.parse(await visualization.generateData(city));
}