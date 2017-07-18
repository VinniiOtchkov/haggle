var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* Get new User Page. */

router.get('/new', function(req, res, next) {
  // var users = {};
  res.render('user_signup');
});

/* Deletes User. */
router.get('/:id/remove', function(req, res, next) {
  knex('')
    .del()
    .where('id', req.params.id)
    .then(function() {
      res.redirect('/');
    });
});

/* Creates New User. */
router.post('/new', function(req, res, next) {
  knex('users')
    .insert({
        name: '${req.body.name}',
       email: '${req.body.email}',
       location_id: '${req.body.location_id}'
     })
    .then(function(req,res) {
res.redirect('/');
    });
});


/* GET USER page. */
// router.get('/:id', function(req, res, next) {
//   knex('user')
//
//     .where('id', req.params.id)
//     .then(function(users) {
//       res.render('user', {
//         user: user.rows
//
//       });
//     });
// });

/* Updates User */
router.post('/:id/update', function(req, res) {
  knex('')
    .update(req.body)
    .where('id', req.params.id)
    .then(function(users) {
      res.redirect(`/${req.params.id}`)
    });
});


module.exports = router;
