const Blog = require('../models/Blog')
const blogRoutes = require('../routes/blogRoutes.js')
const { javascript } = require('webpack')
//index blogs 

exports.indexBlogs = async function (req, res) {
    try {
        const indexBlogs = await Blog.find({})
        res.json(indexBlogs)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//create post 

exports.createBlog = async function (req, res) {
    try {
        const createBlog = await Blog.create(req.body)
        res.json(createBlog)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


//update 

exports.updateBlog = async function (req, res) {
    try {
        const blog = await Blog.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true})
        res.json(blog)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//deleting

exports.deleteBlog = async function (req, res) {
    try {
        await Blog.findOneAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

//show specific blog 

exports.specificBlog = async function (req, res) {
    try {
        const blog = await Blog.findOne({_id: req.params.id})
        res.json(blog)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

