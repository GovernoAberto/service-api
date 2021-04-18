import { DataSource } from "./DataSource";

export class Dataset {
  constructor(
    readonly name: string, 
    readonly title: string,
    readonly source: DataSource,
    readonly metadata: any
  ) { 
    
  }
}
