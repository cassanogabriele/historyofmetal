var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('black_metal_bands', { title: 'Groupes de Black Metal' });
});

module.exports = router;
