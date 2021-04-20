import { City } from "@entities/City";
import { Visualization } from "@entities/Visualization";

export default async function (visualization: Visualization, city: City) : Promise<unknown> {
  return { 
    alias: visualization.alias, 
    title: visualization.title, 
    category: visualization.category, 
    data: await visualization.generateTable(city)
  };
}