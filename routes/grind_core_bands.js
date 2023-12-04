var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('grind_core_bands', { title: 'Groupes de Grind Core' });
});

module.exports = router;
