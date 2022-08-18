const fetch = require('node-fetch');
require('dotenv').config();

const key = process.env.API_KEY;
let a = 1;
const move = (req, res) => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${a += 1}`)
    .then((responce) => responce.json())
    .then((result) => {
      // console.log(result)
    //   a++;
      res.json(result);
    });
};
module.exports = move;
