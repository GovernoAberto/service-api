import express from 'express';
import { router } from './routes';
import "reflect-metadata";
import cors from 'cors';
import { config as dotenv } from "dotenv";
import { connectDatabase } from "@infra/database/mongodb/Connection";
dotenv();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

connectDatabase().then(() => {
  console.log('Conectou no Mongo DB');
});

export { app };