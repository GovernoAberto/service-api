import { DatasetApi } from "./DatasetApi";
import axios from "axios";
import { Dataset } from "@entities/Dataset";
import { DataSource, DataSourceType } from "@entities/DataSource";
import cubejs, { CubejsApi, ResultSet } from '@cubejs-client/core';
import { CubeJsQuery } from "@domain/entities/query/CubeJsQuery";

export class CubeJsApi implements DatasetApi
{
    private loaded = false;
    private api: CubejsApi;

    private cubes: Array<{
        name: string,
        title: string,
        description: string,
        measures: Array<{
            name: string,
            title: string
        }>,
        dimensions: Array<{
            name: string,
            title: string
        }>,
    }>;
    private datasets: Dataset[];
    private source: DataSource;

    constructor(name: string, token: string, url: string) {
      this.source = new DataSource(name, DataSourceType.CUBEJS, url, token);
    }

    async load() : Promise<void> {
      this.loaded = false;

      const response = await axios.get(this.source.url + '/meta', {
        headers: {'Authorization': this.source.token}
      });
      this.cubes = response.data.cubes;
      
      this.datasets = this.cubes.map(cube => { 
        const metadata = cube.description == undefined ? {} : JSON.parse(cube.description);
        return new Dataset(cube.name, cube.title, this.source, metadata);
      });

      this.loaded = true;
    }

    async executeQuery(query: CubeJsQuery) : Promise<ResultSet> {
      const cubejsAPI = cubejs(query.dataset.source.token, { apiUrl: query.dataset.source.url });

      query.dataset.source.url;
      
      const result = await cubejsAPI.load(query.process());
      
      return result;
    }
    
    get() : string {
      return "";
    }

    getDatasets() : Dataset[] {
      if(!this.loaded) throw new Error("API not loaded");

      return this.datasets;
    }
}