var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET all items by location. */
router.post('/', function(req, res, next) {
  knex('items_by_location')
    .select()
    .where('location_id', req.body.location_id)
    .then(data => {
      res.send(data);
    })
});

// /* GET Single Item. */
// router.get('/:id', function(req, res, next) {
//   knex('')
//
//     .then(function(items) {
//
//     })
// })

/* Get Add Item page */
router.get('/addItem', function(req, res, next) {
  var items = {};
  res.render('addItem');
})

// /* Remove Item. */
// router.get('/:id/remove', function(req, res, next) {
//   knex('')
//
//     .then(function(items) {
//
//     })
// })
//
// /* Update Single Item. */
// router.post('/:id/update', function(req, res, next) {
//   knex('')
//     .update()
//     .then(function(items) {
//
//     })
// })
/* Add new Item. */
router.post('/addItem', function(req, res, next) {
  knex('items')
    .insert(req.body)
    .then(() => {
      res.redirect('/users/' + req.user.id);
    });
});


module.exports = router;
