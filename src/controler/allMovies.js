const fetch = require('node-fetch');
const process = require('dotenv').config();

const key = process.parsed.API_KEY;
const allMovies = (req, res) => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=100`)
    .then((response) => response.json())
    .then((result) => {
      res.json(result.results);
    });
};

module.exports = allMovies;
