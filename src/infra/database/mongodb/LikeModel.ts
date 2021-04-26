import mongoose, { Document, Schema } from 'mongoose';

export interface LikeInterface extends Document {
  visualization: string,
  date: string,
  city: number,
  ip: string,
  info: any,
}

const LikeSchema: Schema = new Schema({
  visualization: String,
  date: String,
  city: Number,
  ip: String,
  info: Object,
});

export default mongoose.model('like', LikeSchema);