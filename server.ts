import { app } from "./src/app";

import { config as dotenv } from "dotenv";
dotenv();

const port = process.env.PORT || 3000;

process.on('unhandledRejection', (reason) => {
  throw reason;
});

process.on('uncaughtException', (error) => {
  console.log(error);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});