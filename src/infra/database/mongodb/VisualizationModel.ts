import mongoose, { Schema } from 'mongoose';

const VisualizationSchema: Schema = new Schema({
  alias: String,
  linkAlias: String,
  title: String,
  description: String,
  category: String,
  dataset: String,
  type: String,
  source: {
    title: { type: String },
    link: { type: String }
  },
  query: {
    type: { type: String },
    data: Object
  },
  parser: {
    type: { type: String },
    data: Object
  },
  notes: {
    type: Array
  },
});

export default mongoose.model('Visualization', VisualizationSchema);