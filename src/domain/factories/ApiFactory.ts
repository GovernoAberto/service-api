import { Dataset } from "@entities/Dataset";
import { CubeJsQuery } from "@entities/query/CubeJsQuery";
import { DatasetQuery } from "@entities/query/DatasetQuery";
import { CubeJsApi } from "./CubeJsApi";
import { DatasetApi } from "./DatasetApi";
import { DatasetNotFound } from "@exceptions/Exceptions";

export class ApiFactory{

  private apis: DatasetApi[] = [];

  async load() : Promise<ApiFactory> {
    const api = new CubeJsApi(
      process.env.CUBE_JS_API_1_NAME,
      process.env.CUBE_JS_API_1_TOKEN,
      process.env.CUBE_JS_API_1_URL 
    );
    await Promise.all([ api.load() ]);

    this.apis = [api];

    return this;
  }

  getDataset(name) : Dataset {
    const datasets = this.getDatasets();
    
    const dataset = datasets.find(dataset => dataset.name == name);
    
    if(!dataset)
      throw new DatasetNotFound();

    return dataset;
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

  async selectAllPublic(dataset: Dataset, page: number, perPage = 20) : Promise<DatasetQuery> {
    let dimensions = dataset.metadata.cube.dimensions;
    dimensions = dimensions.filter(dimension => dimension.meta && dimension.meta.public).map(dimension => dimension.name);

    const query = this.newQuery(dataset, { dimensions: dimensions });

    return query;
  }
}