const express = require('express')
const router = require('express').Router()
const blogCtrl = require('../controllers/blogController.js')
//create
router.post('/', blogCtrl.createBlog)
//index
router.get('/', blogCtrl.indexBlogs)
//show
router.get('/:id', blogCtrl.specificBlog)
//update
router.put('/:id', blogCtrl.updateBlog)
//delete
router.delete('/:id', blogCtrl.deleteBlog)

module.exports = router