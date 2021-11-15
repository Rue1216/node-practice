const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

//create new blog
router.get('/create', blogController.blog_create_get);

router.get('/', blogController.blog_index);

//create new blog (save the input into the blog object)
router.post('/', blogController.blog_create_post);
//尋找id、取出需要的資料
router.get('/:id', blogController.blog_details);
//刪除功能
router.delete('/:id', blogController.blog_delete);

module.exports = router;