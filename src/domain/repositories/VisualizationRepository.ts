
import { ApiFactory } from "@domain/factories/ApiFactory";
import { CubeJsQuery } from "@domain/entities/query/CubeJsQuery";
import { Visualization, VisualizationType } from "@entities/Visualization";
import VisualizationModel from "@infra/database/mongodb/VisualizationModel";

export class VisualizationRepository{

  constructor(private factory: ApiFactory) {

  }

  async all() : Promise<Visualization[]> {
    const visualizationsDB = await VisualizationModel.find();
    const visualizations = visualizationsDB.map(item => this.parseVisualization(item));

    return visualizations;
  }

  async findByAlias(alias: string) : Promise<Visualization> {
    const visualizationDB = await VisualizationModel.findOne({ alias: alias });
    const visualization = this.parseVisualization(visualizationDB);

    return visualization;
  }

  async findByType(type: VisualizationType) : Promise<Visualization[]> {
    const visualizationsDB = await VisualizationModel.find({ type: type });
    const visualizations = visualizationsDB.map(item => this.parseVisualization(item));

    return visualizations;
  }

  private parseVisualization(visualizationData: any) : Visualization {
    
    const dataset = this.factory.getDataset(visualizationData.dataset);

    const query = new CubeJsQuery(dataset, visualizationData.query.data, this.factory);

    return new Visualization(
      visualizationData.alias,
      visualizationData.title,
      visualizationData.category,
      visualizationData.type,
      visualizationData.scope,
      query,
      visualizationData.parser,
      (visualizationData.linkAlias) ? visualizationData.linkAlias : "",
      visualizationData.notes ? visualizationData.notes : []
    );
  }
}