import mongoose, { Mongoose } from 'mongoose';
import { config as dotenv } from "dotenv";

dotenv();

export async function connectDatabase() : Promise<Mongoose>{
  return mongoose.connect(process.env.MONGO_DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true });
}

export async function closeConnection() : Promise<void>{
  return mongoose.connection.close();
}