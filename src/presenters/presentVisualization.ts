import { City } from "@entities/City";
import { Visualization } from "@entities/Visualization";

export default async function (visualization: Visualization, city: City) : Promise<unknown> {
  return {
    alias: visualization.alias, 
    linkAlias: visualization.linkAlias,
    title: visualization.title, 
    description: visualization.description, 
    category: visualization.category,
    type: visualization.type,
    data: await visualization.display(city),
    dataset: {
      name: visualization.getDataset().name,
      title: visualization.getDataset().title,
    },
    notes: visualization.notes,
    source: visualization.source,
    period: visualization.period
  };
}