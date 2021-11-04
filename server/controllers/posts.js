const PostTask = require('../models/postTask');

const getAll = async (_req, res) => {
  try {
    const postTaks = await PostTask.find();

    res.status(200).json(postTaks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
};