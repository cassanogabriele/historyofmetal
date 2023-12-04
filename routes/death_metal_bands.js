var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('death_metal_bands', { title: 'Groupes de Death Metal' });
});

module.exports = router;
