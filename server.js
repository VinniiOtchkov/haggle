var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');
var expressLayouts = require('express-ejs-layouts');
var bcrypt = require('bcrypt');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');


var index = require('./routes/indexRoutes');
var items = require('./routes/itemsRoutes');
var user = require('./routes/userRoutes');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);

app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/items', items);
app.use('/user', user);


passport.use(new LocalStrategy(
  function(email, password, done) {

    // Query the database to find a user
    knex('users').select().where('email', email).then(function(user) {

      // If the user doesn't exist, redirect home
      if (user.length < 1) {
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }

      // If the password is incorrect, redirect home
      if (user[0].password !== password) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }

      // Else, continue and set the user to req.user
      return done(null, user[0]);
    });
  }
));



app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

//Serializes User Object
passport.serializeUser(function(user, done) {
  done(null, user);
});

//Deserializes User Object
passport.deserializeUser(function(id, done) {
  done(null, id);
});


app.listen(port, function() {
  console.log("listening on port: ", port);
});
