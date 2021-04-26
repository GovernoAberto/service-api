import mongoose, { Document, Schema } from 'mongoose';

export interface EventInterface extends Document {
  id: number, 
  ip: string, 
  url: string,
  params: any,
  date: string,
  region: string,
  city: string,
  client: any
}

const EventSchema: Schema = new Schema({
  id: Number,
  ip: String,
  url: String,
  params: {
    type: Object
  },
  date: String,
  region: String,
  city: String,
  client: {
    type: Object
  },
  __v: { type: Number, select: false }
});

export default mongoose.model<EventInterface>('Event', EventSchema);