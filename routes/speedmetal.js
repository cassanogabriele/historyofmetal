var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('speedmetal', { title: 'Speed Metal' });
});

module.exports = router;
