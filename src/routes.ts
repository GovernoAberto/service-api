import { City } from "@domain/entities/City";
import { Router } from "express";
import { CityRepository } from "./domain/repositories/CityRepository";
import datasetController from './controllers/DatasetController';
import cityController from './controllers/CityController';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/states', cityController.states);
router.get('/state/:alias/cities', cityController.cities);
router.get('/city-info/:state/:city', cityController.cityInfo);
router.get('/datasets', datasetController.datasets);
router.get('/categories', datasetController.categories);
router.get('/visualization/:alias', datasetController.visualization);
router.get('/visualization/:alias/table', datasetController.tableByVisualization);
router.get('/visualizations', datasetController.visualizations);

export { router };