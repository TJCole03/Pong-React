const express = require('express')
// const morgan = require('morgan')
const app = express(); 
//const appServer = require('./server.js')

//import router 
const blogRoutes = require('./routes/blogRoutes.js')

//set up middleware
app.use(express.json())
app.use(express.static('public'))
app.use('/api/blogs', blogRoutes)
//app.use('/', appServer)
// app.use(morgan('combined'))

//export app

module.exports = app