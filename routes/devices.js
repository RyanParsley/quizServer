var express = require('express');
var router = express.Router();
var devices = require("../data/devices");

/* GET questions listing. */
router.get('/', function(req, res, next) {
  res.json(devices);
});

module.exports = router;
