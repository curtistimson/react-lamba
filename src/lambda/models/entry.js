import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: String,
});
const entry = mongoose.model('entry', schema);

export default entry;