import { app } from "./src/app";

import { config as dotenv } from "dotenv";
dotenv();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});