import { Router } from "express";
import datasetController from './controllers/DatasetController';
import cityController from './controllers/CityController';
import routeEvents from "./routeEvents";

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/states', routeEvents, cityController.states);
router.get('/state/:alias/cities', routeEvents, cityController.cities);
router.get('/city-info/:state/:city', routeEvents, cityController.cityInfo);
router.get('/dataset/add', routeEvents, datasetController.add);
router.get('/dataset/:name', routeEvents, datasetController.dataset);
router.get('/dataset/:name/table', routeEvents, datasetController.datasetTable);
router.get('/dataset/:name/download/:format', routeEvents, datasetController.downloadDataset);
router.get('/categories', routeEvents, datasetController.categories);
router.get('/visualization/:alias', routeEvents, datasetController.visualization);
router.get('/visualization/:alias/table', routeEvents, datasetController.tableByVisualization);
router.get('/visualization/:alias/download/:format', routeEvents, datasetController.downloadVisualizationTable);
router.get('/visualizations', routeEvents, datasetController.visualizations);

export { router };