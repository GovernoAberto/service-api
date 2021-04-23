import express from 'express';
import { router } from './routes';
import "reflect-metadata";
import cors from 'cors';
import { config as dotenv } from "dotenv";
import { connectDatabase } from "@infra/database/mongodb/Connection";
import BaseError from '@exceptions/BaseError';
dotenv();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(function(error, request, response, next) {
  if(response.headersSent) return next(error);

  if(error instanceof BaseError) error.renderHttpResponse(response);
  else throw error;
});


connectDatabase().then(() => {
  console.log('Conectou no Mongo DB');
});

export { app };