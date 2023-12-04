var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('heavy_metal_bands', { title: 'Groupes de Heavy Metal' });
});

module.exports = router;
