const fetch = require('node-fetch');
require('dotenv').config();

const key = process.env.API_KEY;
const getLastMoves = (req, res) => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=100`)
    .then((responce) => responce.json())
    .then((result) => {
      const filterData = result.results[1];
      res.json(filterData);
    });
};
module.exports = getLastMoves;
