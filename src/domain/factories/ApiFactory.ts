import { Dataset } from "@entities/Dataset";
import { CubeJsQuery } from "@entities/query/CubeJsQuery";
import { DatasetQuery } from "@entities/query/DatasetQuery";
import { CubeJsApi } from "./CubeJsApi";
import { DatasetApi } from "./DatasetApi";

export class ApiFactory{

  private apis: DatasetApi[] = [];

  async load() : Promise<void> {
    const api = new CubeJsApi(
      process.env.CUBE_JS_API_1_NAME,
      process.env.CUBE_JS_API_1_TOKEN,
      process.env.CUBE_JS_API_1_URL 
    );
    await Promise.all([ api.load() ]);

    this.apis = [api];
  }

  getDataset(name) : Dataset {
    const datasets = this.getDatasets();
    
    return datasets.find(dataset => dataset.name == name);
  }

  getDatasets() : Dataset[] {
    let datasets:Dataset[] = [];

    this.apis.forEach(api => { 
      datasets = datasets.concat(api.getDatasets());
    });

    return datasets;
  }

  newQuery(dataset: Dataset, queryData: unknown) : DatasetQuery {
    return new CubeJsQuery(dataset, queryData, this);
  }

  async executeQuery(dataset: Dataset, query: DatasetQuery) : Promise<any> {
    return await this.apis[0].executeQuery(query);
  }

  async selectAll(dataset: Dataset) : Promise<DatasetQuery> {
    const dimensions = dataset.metadata.cube.dimensions.map(dimension => dimension.name);

    const query = this.newQuery(dataset, { dimensions: dimensions });

    return query;
  }
}