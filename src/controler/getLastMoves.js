const fetch = require('node-fetch');
const process = require('dotenv').config();

const key = process.parsed.API_KEY;
const getLastMoves = (req, res) => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=100`)
    .then((responce) => responce.json())
    .then((result) => {
      const filterData = result.results[0];
      res.json(filterData);
    });
};
module.exports = getLastMoves;
