const router = require("express").Router();
const Movie = require("../models/Movie");

//AddMovie
router.post("/addMovie", async (req, res) => {
    const newMovie = Movie({
        title : req.body.title,
        details :  req.body.details,
        genre : req.body.genre,
        releaseDate : req.body.releaseDate,
        duration : req.body.duration
        //img
        //imgThumb
        //video
    });

    try{
        const movie = await newMovie.save();
        console.log(movie);
        res.status(201).json(movie); 
    } catch (err) {
        res.status(500).json(err);
    }
})

//get movies by user id

//get movies by genre id

//get movies by released in the last year

//get movie by id

module.exports = router; 