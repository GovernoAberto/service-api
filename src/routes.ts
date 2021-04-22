import { Router } from "express";
import datasetController from './controllers/DatasetController';
import cityController from './controllers/CityController';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/states', cityController.states);
router.get('/state/:alias/cities', cityController.cities);
router.get('/city-info/:state/:city', cityController.cityInfo);
router.get('/dataset/add', datasetController.add);
router.get('/dataset/:name', datasetController.dataset);
router.get('/dataset/:name/table', datasetController.datasetTable);
router.get('/dataset/:name/download/:format', datasetController.downloadDataset);
router.get('/categories', datasetController.categories);
router.get('/visualization/:alias', datasetController.visualization);
router.get('/visualization/:alias/table', datasetController.tableByVisualization);
router.get('/visualization/:alias/download/:format', datasetController.downloadVisualizationTable);
router.get('/visualizations', datasetController.visualizations);

export { router };