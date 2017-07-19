var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* Get new User Page. */
router.get('/new', function(req, res, next) {
  var users = {};
  knex('locations')
    .select()
    .then(function(locations) {
      res.render('user_signup', {
        locations
      });
    })
});

/* GET Login Page. */
router.get('/login', function(req, res, next) {
  res.render('user_login');
})

/* GET USER page. */
router.get('/:id', function(req, res, next) {
  Promise.all([knex('selling_by_id')
    .join('users', 'users.id', 'selling_by_id.seller_id')
    .select('seller_name', 'img_url', 'item_name', 'haggle_price', 'buyer_name', 'status')
    .where('seller_id', req.params.id),
    knex('buyer_by_id')
    .join('users', 'users.id', 'buyer_by_id.buyer_id')
    .select('img_url', 'item_name', 'haggle_price', 'seller_name', 'city', 'status')
    .where('buyer_id', req.params.id),
    knex('users')
    .select()
    .where('id', req.params.id)
  ]).then(function(users) {
    res.render('user', {
      selling: users[0],
      buying: users[1],
      users: users[2][0]
    });
  });
});

/* Deletes User. */
router.get('/:id/remove', function(req, res, next) {
  knex('users')
    .del()
    .where('id', req.params.id)
    .then(function() {
      res.redirect('/');
    });
});

/* Creates New User. */
router.post('/new', function(req, res, next) {
  console.log(req.body);
  knex('users')
    .insert(req.body)
    .then(function() {
      knex('users')
        .select()
        .max('id')
        .then(function(users) {
          console.log('params: ', users[0].max);
          res.redirect('/user/' + users[0].max);
        })
    });
});


/* Updates User */
router.post('/:id/update', function(req, res) {
  knex('users')
    .update(req.body)
    .where('id', req.params.id)
    .then(function(users) {
      res.redirect(`/${req.params.id}`)
    });
});


module.exports = router;
