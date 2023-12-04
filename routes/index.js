var express = require('express');
var router = express.Router();

/* Route qui appelle "/" pour la page d'accueil, avec la méthode GET. */
router.get('/', function(req, res, next) {
   // On appelle une fonction qui rend le template "jade" à la page d'accueil.
   // Le second élément est un objet json dans le cas ou on inclut un titre qui est inclus dans "index.jade"
   res.render('index', { title: 'Accueil' });
});

module.exports = router;
