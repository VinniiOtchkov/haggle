var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from items').then(function(items) {
    res.send(items.rows);
  });
});

module.exports = router;
