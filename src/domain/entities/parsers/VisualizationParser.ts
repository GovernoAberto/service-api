import { Visualization } from "../../entities/Visualization";

export abstract class VisualizationParser {

  abstract type:string;

  abstract parse(data: any, visualization: Visualization) : unknown;
}