import { Dataset } from "@entities/Dataset";
import { DatasetQuery } from "@domain/entities/query/DatasetQuery";

export interface DatasetApi
{
    get() : string;
    executeQuery(query: DatasetQuery) : Promise<unknown>;
    getDatasets() : Dataset[];
}