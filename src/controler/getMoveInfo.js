const fetch = require('node-fetch');
require('dotenv').config();

const key = process.env.API_KEY;
const getMoveInfo = (req, res) => {
  console.log(req.params.id);
  fetch(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${key}&page=1`)
    .then((responce) => responce.json())
    .then((result) => {
      // console.log(result)
    //   a++;
      res.json(result);
    });
};
module.exports = getMoveInfo;
