import mongoose, { Document, Schema } from 'mongoose';

export interface LikeInterface extends Document {
  visualization: string, 
  city: number,
  ip: string,
  info: string,
}

const LikeSchema: Schema = new Schema({
  visualization: String,
  city: Number,
  ip: String,
  info: String,
});

export default mongoose.model('like', LikeSchema);