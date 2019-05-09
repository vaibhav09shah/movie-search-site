const express = require('express');
const router  = express.Router();
const axios   = require('axios');
router.get('/' , (req,res) => { 
    const movieName = req.query.keyword;
    // API Key generated and stored in ENV File
    const apiKey = process.env.MOVIE_SECRET_KEY;
    const reqPromise1 = axios.get('http://www.omdbapi.com/?s='+movieName+'&plot=full&apikey='+apiKey);
    const reqPromise2 = axios.get('http://www.omdbapi.com/?s='+movieName+'&plot=full&apikey='+apiKey+'&page=2')

    //Combined two requests as one request only returns 10 records. Consolidated Response sent from the API
    Promise.all([reqPromise1, reqPromise2])
          .then( response => {
                const movieArray1 = response[0].data.Search;
                const movieArray2 = response[1].data.Search;
                const allResponse = {
                    movies:movieArray1.concat(movieArray2),
                    totalResults:response[0].data.totalResults,
                    Response:response[0].data.Response
                }
                res.json(allResponse);
           })
           .catch( error => {
              res.status(400).json({
                'Response':false,
                'Error':'Something went wrong . Please try again'
              })
           });
});

module.exports = router;