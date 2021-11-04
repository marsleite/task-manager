const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  creator: 'String',
  title: 'String',
  message: 'String',
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const PostTask = mongoose.model('PostTask', taskSchema);

module.exports = PostTask;