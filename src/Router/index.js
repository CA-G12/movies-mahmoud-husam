const router = require('express').Router();
const postData = require('../controler/outcomplet');
const getLastMoves = require('../controler/getLastMoves');
const allMovies = require('../controler/allMovies');
const move = require('../controler/move');
const movePage = require('../controler/movePage');
const getMoveInfo = require('../controler/getMoveInfo');

router.get('/', getLastMoves);
router.post('/autoComplete', postData);
router.get('/movies', allMovies);
router.get('/movies/loadmore', move);
router.get('/movies/:id', movePage);
router.get('/getmoveInfo/:id', getMoveInfo);
module.exports = router;
