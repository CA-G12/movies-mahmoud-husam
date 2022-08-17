const fetch = require('node-fetch');
require('dotenv').config();

const key = process.env.API_KEY;
const postData = (req, res) => {
  if (req.body.input.length !== 0) {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=100`)
      .then((responce) => responce.json())
      .then((result) => {
        const filterData = result.results.filter((ele) => ele.title.includes(req.body.input));
        res.json(filterData);
      });
  }
};

module.exports = postData;
