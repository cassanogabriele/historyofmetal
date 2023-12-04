var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('powermetal', { title: 'Power Metal' });
});

module.exports = router;
