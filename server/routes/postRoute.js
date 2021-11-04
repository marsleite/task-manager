const router = require('express').Router();

const Post = require('../controllers/posts');

router.get('/', Post.getAll);

module.exports = router;