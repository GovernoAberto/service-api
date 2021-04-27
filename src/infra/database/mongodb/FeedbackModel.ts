import mongoose, { Document, Schema } from 'mongoose';

export interface FeedbackInterface extends Document {
  visualization: string,
  date: string,
  comment: string,
  contact: string
}

const FeedbackSchema: Schema = new Schema({
  visualization: String,
  date: String,
  comment: String,
  contact: String
});

export default mongoose.model('feedback', FeedbackSchema);