import { Dataset } from "@entities/Dataset";

export class DatasetService{

  findByCity() : Dataset {
    const dataset = new Dataset();
    dataset.id = 1;
    dataset.alias = "frota-veiculos";
    dataset.name = "Frota de veículos";
    dataset.sphere = "country";
    dataset.scope = "country";
    dataset.metadata = "";
    // dataset.api 
    // dataset.category
    // dataset.location;
    // dataset.source
    // dataset.tags
    // dataset.visualizations
    
    return dataset;
  }
}