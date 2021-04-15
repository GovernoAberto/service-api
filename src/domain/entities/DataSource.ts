
export enum DataSourceType {
  CUBEJS = 'cubejs'
}

export class DataSource {
  constructor(
  readonly name: string,
  readonly type: DataSourceType,
  readonly url: string,
  readonly token: string
  ) { 
  
  }
}
  