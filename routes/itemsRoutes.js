var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET all items. */
router.get('/:location_id', function(req, res, next) {
  knex('')

    .then(function(items) {

    });
});
/* GET Single Item. */
router.get('/:id', function(req, res, next) {
  knex('')

    .then(function(items) {

    })
})

/* Get Add Item page */
router.get('/newItem', function(req, res, next) {
  var items = {};
  res.render('', {
    items
  })
})

/* Remove Item. */
router.get('/:id/remove', function(req, res, next) {
  knex('')

    .then(function(items) {

    })
})

/* Update Single Item. */
router.post('/:id/update', function(req, res, next) {
  knex('')
    .update()
    .then(function(items) {

    })
})
/* Add new Item. */
router.post('/addItem', function(req, res, next) {
  knex('')
    .insert()
    .then(function() {

    })
})


module.exports = router;
