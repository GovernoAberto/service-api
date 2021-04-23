
import { ApiFactory } from "@domain/factories/ApiFactory";
import { CubeJsQuery } from "@domain/entities/query/CubeJsQuery";
import { Visualization, VisualizationType } from "@entities/Visualization";
import VisualizationModel from "@infra/database/mongodb/VisualizationModel";
import { VisualizationNotFound } from "@exceptions/Exceptions";

export class VisualizationRepository{

  constructor(private factory: ApiFactory) {

  }

  async add() : Promise<void> {
    const view = {
      alias: "nascimentos-2020",
      title: "Nascimentos em 2020",
      category: "Saúde",
      dataset: "Nascimentos",
      type: "chart",
      query: {
        type: "cubejs",
        data: {
          measures: [ "Nascimentos.total" ],
          dimensions: [ "Nascimentos.ano", "Nascimentos.mes" ],
          order: [ ["Nascimentos.ano","asc"], ["Nascimentos.mes","asc"] ],
          filters: [{
            member: "Nascimentos.ano",
            operator: "equals",
            values: [ "2020" ]
          }]
        }
      },
      parser: {
        type: "line-chart",
        data: {

        }
      },
      notes: [],
      source: {
        title: "Portal da Transparência do Registro Cívil",
        link: "https://transparencia.registrocivil.org.br/registros"
      }
    };

    const newView = await VisualizationModel.create(view);

    console.log(newView);
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

  async filter(type: VisualizationType, limit: number, skip: number, category ?: string, title ?: string) : Promise<Visualization[]> {
    const filters:any = { type: type};
    const options:any = { sort: { 'order': 'asc' }, limit: limit, skip: skip };

    if(category != undefined && category.length > 0) {
      filters.category = category; 
    }

    if(title != undefined && title.length > 0) {
      filters.title = {
        $regex: '.*' + title + '.*', $options:'i'
      };
    }

    const visualizationsDB = await VisualizationModel.find(filters, null, options);
    const visualizations = visualizationsDB.map(item => this.parseVisualization(item));

    return visualizations;
  }

  async findByType(type: VisualizationType) : Promise<Visualization[]> {
    const visualizationsDB = await VisualizationModel.find({ type: type });
    const visualizations = visualizationsDB.map(item => this.parseVisualization(item));

    return visualizations;
  }

  private parseVisualization(visualizationData: any) : Visualization {
    if(!visualizationData)
      throw new VisualizationNotFound();

    const dataset = this.factory.getDataset(visualizationData.dataset);

    const query = new CubeJsQuery(dataset, visualizationData.query.data, this.factory);

    return new Visualization(
      visualizationData.alias,
      visualizationData.title,
      visualizationData.description,
      visualizationData.category,
      visualizationData.type,
      query,
      visualizationData.parser,
      (visualizationData.linkAlias) ? visualizationData.linkAlias : "",
      visualizationData.notes ? visualizationData.notes : [],
      visualizationData.order,
      visualizationData.source.title ? visualizationData.source : null,
      visualizationData.period
    );
  }
}