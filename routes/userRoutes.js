var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET USER page. */
router.get('/:id', function(req, res, next) {
  knex('')

    .then(function(users) {

    });
});
/* Get new User Page. */
router.get('/')
router.post('/newUser', function(req, res, next) {
  knex('')
    .insert({

    })
    .then(function() {

    });
})

module.exports = router;
