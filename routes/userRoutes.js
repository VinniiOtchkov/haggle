var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET USER page. */
router.get('/:id', function(req, res, next) {
  knex('')

    .where('', req.params.id)
    .then(function(users) {
      res.render('', {

      })
    });
});

/* Get new User Page. */
router.get('/new', function(req, res, next) {
  var users = {};
  res.render('', {

  })
})

/* Deletes User. */
router.get('/:id/remove', function(req, res, next) {
  knex('')
    .del()
    .where('id', req.params.id)
    .then(function() {
      res.redirect('/');
    });
})

/* Creates New User. */
router.post('/newUser', function(req, res, next) {
  knex('')
    .insert({

    })
    .then(function() {

    });
});

/* Updates User */
router.post('/:id/update', function(req, res) {
  knex('')
    .update(req.body)
    .where('', req.params.id)
    .then(function(users) {
      res.redirect(`/${req.params.id}`)
    })
});


module.exports = router;
