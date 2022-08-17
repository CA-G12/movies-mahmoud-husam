const router = require('express').Router();
const postData = require('../controler/outcomplet');
const getLastMoves = require('../controler/getLastMoves');

router.get('/', getLastMoves);
router.post('/autoComplete', postData);

module.exports = router;
