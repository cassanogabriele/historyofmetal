var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('doom_metal_bands', { title: 'Groupes de Doom' });
});

module.exports = router;
