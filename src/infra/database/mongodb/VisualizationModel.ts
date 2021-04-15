import mongoose, { Schema } from 'mongoose';

const VisualizationSchema: Schema = new Schema({
  alias: String,
  title: String,
  category: String,
  dataset: String,
  type: String,
  scope: {
    type: { type: String },
    column: String,
    columnType: String
  },
  query: {
    type: { type: String },
    data: Object
  },
  parser: {
    type: { type: String },
    data: Object
  }
});

export default mongoose.model('Visualization', VisualizationSchema);