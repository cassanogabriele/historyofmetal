var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('thrash_metal_bands', { title: 'Groupes de Thrash Metal' });
});

module.exports = router;
