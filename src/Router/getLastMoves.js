const router = require('express').Router();
const getLastMoves = require('../controler/getLastMoves');

router.get('/', getLastMoves);

module.exports = router;
