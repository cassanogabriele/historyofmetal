var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('power_metal_bands', { title: 'Groupes de Power Metal' });
});

module.exports = router;
