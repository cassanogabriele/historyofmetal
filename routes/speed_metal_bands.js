var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('speed_metal_bands', { title: 'Groupes de Speed Metal' });
});

module.exports = router;
