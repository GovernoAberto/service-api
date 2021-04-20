import { City } from "@entities/City";
import { JsonParser } from "@entities/parsers/JsonParser";
import { Visualization } from "@entities/Visualization";
import { Response } from "express";

export default async function (visualization: Visualization, city: City, response: Response) : Promise<unknown> {
  response.set('Content-disposition', 'attachment; filename=' + visualization.title + ' - ' +  city.name + ".json");
  response.set('Content-Type', 'text/json');

  const parser = new JsonParser({});
  return parser.parse(await visualization.generateData(city));
}