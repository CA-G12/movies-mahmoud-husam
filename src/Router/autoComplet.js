const router = require('express').Router();
const postData = require('../controler/outcomplet');

router.post('/autoComplete', postData);

module.exports = router;
