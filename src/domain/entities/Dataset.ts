import { DataSource } from "./DataSource";

export class Dataset {
  constructor(
    readonly name: string, 
    readonly title: string,
    readonly source: DataSource,
    readonly metadata: any
  ) { 
    
  }

  getScope() : { type: string, column: string, columnType: string } {
    if(!this.metadata.cube)
      throw Error("Cube not declared in dataset");

    const dimensionWithScope = this.metadata.cube.dimensions.find(dimension => { 
      return typeof dimension.meta == 'object' && typeof dimension.meta.scope == 'object';
    });

    return { 
      type: dimensionWithScope.meta.scope.type, 
      column: dimensionWithScope.name, 
      columnType: dimensionWithScope.meta.scope.columnType 
    };
  }
}
