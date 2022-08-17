const router = require('express').Router();
const postData = require('../controler/outcomplet');
const getLastMoves = require('../controler/getLastMoves');
const allMovies = require('../controler/allMovies');

router.get('/', getLastMoves);
router.post('/autoComplete', postData);
router.get('/movies', allMovies);

module.exports = router;
