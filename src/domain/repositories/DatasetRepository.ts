import { CubeJsApi } from "@domain/factories/CubeJsApi";
import { Dataset } from "@entities/Dataset";

export class DatasetRepository{

  async all() : Promise<Dataset[]> {
    const api = new CubeJsApi("governoaberto", "", "http://localhost:4000/cubejs-api/v1");
    await api.load();

    return api.getDatasets();
  }

  async find(name: string) : Promise<Dataset> {
    const api = new CubeJsApi("governoaberto", "", "http://localhost:4000/cubejs-api/v1");
    await api.load();

    return api.getDatasets().find(dataset => dataset.name == name);
  }

}