var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var routes = require('./routes/index');
var about = require('./routes/about');
var heavymetal = require('./routes/heavymetal');
var thrashmetal = require('./routes/thrashmetal');
var deathmetal = require('./routes/deathmetal');
var powermetal = require('./routes/powermetal');
var blackmetal = require('./routes/blackmetal');
var doom = require('./routes/doom');
var hardcore = require('./routes/hardcore');
var speedmetal = require('./routes/speedmetal');
var grindcore = require('./routes/grindcore');
var bands = require('./routes/bands');
var heavy_metal_bands = require('./routes/heavy_metal_bands');
var thrash_metal_bands = require('./routes/thrash_metal_bands');
var speed_metal_bands = require('./routes/speed_metal_bands');
var grind_core_bands = require('./routes/grind_core_bands');
var death_metal_bands = require('./routes/death_metal_bands');
var black_metal_bands = require('./routes/black_metal_bands');
var power_metal_bands = require('./routes/power_metal_bands');
var doom_metal_bands = require('./routes/doom_metal_bands');
var users = require('./routes/users');
var app = express();

// Configuration du moteur de vue
app.set('views', path.join(__dirname, 'views'));
// Moteur html.
app.set('view engine', 'jade');

app.use(logger('dev'));
// parse html et json 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Page "home"
app.use('/', routes);
// Page "users"
app.use('/users', users);
// Page "about"
app.use('/about', about);
// Page "heavy metal"
app.use('/heavymetal', heavymetal); 
// Page "trash metal"
app.use('/thrashmetal', thrashmetal);
// Page "death metal"
app.use('/deathmetal', deathmetal);
// Page "power metal"
app.use('/powermetal', powermetal);
// Page "black metal"
app.use('/blackmetal', blackmetal);
// Page "doom"
app.use('/doom', doom);
// Page "hard core"
app.use('/hardcore', hardcore);
// Page "speed metal"
app.use('/speedmetal', speedmetal);
// Page "grind core"
app.use('/grindcore', grindcore);
// Page "bands"
app.use('/bands', bands);
// Page "Heavy metal bands"
app.use('/heavy_metal_bands', heavy_metal_bands);
// Page "Thrash metal bands"
app.use('/thrash_metal_bands', thrash_metal_bands);
// Page "Speed metal bands"
app.use('/speed_metal_bands', speed_metal_bands);
// Page "Grind bands"
app.use('/grind_core_bands', grind_core_bands);
// Page "Grind bands"
app.use('/death_metal_bands', death_metal_bands);
// Page "Black Metal bands"
app.use('/black_metal_bands', black_metal_bands);
// Page "Power Metal bands"
app.use('/power_metal_bands', power_metal_bands);
// Page "Doom Metal bands"
app.use('/doom_metal_bands', doom_metal_bands);


// catch 404 and forward to error handler
/*app.use(function (req, res, next) {
  if (!req.user) return next(createError(401, 'Please login to view this page.'))
  next()
})*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
