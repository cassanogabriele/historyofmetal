var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('heavymetal', { title: 'Heavy Metal' });
});

module.exports = router;
