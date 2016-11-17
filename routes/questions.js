var express = require('express');
var router = express.Router();
var questions = require("../data/questions");

/* GET questions listing. */
router.get('/', function(req, res, next) {
  res.json(questions);
});

module.exports = router;
