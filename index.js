const express = require('express');
const bodyParser = require('body-parser');

// Including DotENV Config
require('dotenv').config();

// Requires
var cors = require('cors');
var path = require('path');
const movieRoutes = require('./routes/api/movies');

// Initialize the express App
const app = express();

// Enabling CORS
app.use(cors())

// Body Parser (Middle ware to parse incoming request)
app.use(bodyParser.json());


// Use API Routes
app.use('/api/search',movieRoutes);

app.use('/',function(req,res){
    res.json({
        'status':200,
        'message':'Welcome to Express API for Movie Search Site'
    })
})

const port = process.env.PORT || 5000;

app.listen(port , () => console.log('Server Started on port '));