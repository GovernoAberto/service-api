import mongoose, { Document, Schema } from 'mongoose';

export interface EventInterface extends Document {
  id: number, 
  ip: string, 
  url: string,
  date: string,
  client: any
}

const EventSchema: Schema = new Schema({
  id: Number,
  ip: String,
  url: String,
  date: String,
  client: {
    type: Object
  },
  __v: { type: Number, select: false }
});

export default mongoose.model<EventInterface>('Event', EventSchema);