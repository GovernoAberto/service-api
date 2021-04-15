import mongoose, { Document, Schema } from 'mongoose';

export interface StateInterface extends Document {
  id: number, 
  alias: string, 
  initials: string, 
  name: string, 
  ibgeCode: number
}

const StateSchema: Schema = new Schema({
  id: Number,
  alias: String,
  initials: String,
  name: String,
  ibgeCode: Number,
  __v: { type: Number, select: false }
});

export default mongoose.model<StateInterface>('State', StateSchema);