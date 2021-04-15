import mongoose, { Document, Schema } from 'mongoose';

export interface CityInterface extends Document {
  id: number,
  alias: string,
  name: string,
  ibgeCodeCity: number,
  ibgeCode: number,
  siafiCode: number,
  state: {
    id: number,
    alias: string,
    initials: string,
    name: string,
    ibgeCode: number,
  }
}

const CitySchema: Schema = new Schema({
  id: Number,
  alias: String,
  name: String,
  ibgeCodeCity: Number,
  ibgeCode: Number,
  siafiCode: Number,
  state: {
    id: Number,
    alias: String,
    initials: String,
    name: String,
    ibgeCode: Number,
  },
  __v: { type: Number, select: false }
});

export default mongoose.model<CityInterface>('City', CitySchema);