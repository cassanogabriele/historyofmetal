var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('hardcore', { title: 'Hard Core' });
});

module.exports = router;
