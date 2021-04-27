import { Router } from "express";
import datasetController from './controllers/DatasetController';
import cityController from './controllers/CityController';
import feedbackController from './controllers/FeedbackController';
import routeEvents from "./routeEvents";

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/states', cityController.states);
router.get('/state/:alias/cities', cityController.cities);
router.get('/city-info/:state/:city', cityController.cityInfo);
router.get('/city/detect', cityController.detectCity);
router.get('/dataset/add', datasetController.add);
router.get('/dataset/:name', routeEvents, datasetController.dataset);
router.get('/dataset/:name/table', datasetController.datasetTable);
router.get('/dataset/:name/download/:format', routeEvents, datasetController.downloadDataset);
router.get('/categories', datasetController.categories);
router.get('/visualization/:alias', routeEvents, datasetController.visualization);
router.get('/visualization/:alias/table', datasetController.tableByVisualization);
router.get('/visualization/:alias/download/:format', routeEvents, datasetController.downloadVisualizationTable);
router.get('/visualizations', routeEvents, datasetController.visualizations);
router.get('/like/:visualization', routeEvents, feedbackController.like);
router.get('/like/:visualization/verify', feedbackController.hasLike);
router.post('/feedback/:visualization', feedbackController.feedback);

export { router };