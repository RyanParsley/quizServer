var express = require('express');
var router = express.Router();
var devices = require("../data/devices");

// create a device (accessed at POST http://localhost:3000/devices)
router.post('/', function(req, res) {

  var device = new Device();
  device.name = req.body.name;

  device.save(function(err) {
    if (err)
      res.send(err);

    res.json({
      message:
        'Device created!'
    });
  });
});

/* GET questions listing. */
router.get('/', function(req, res, next) {
  res.json(devices);
});

var fakeDay = new Date('November 20, 2016 03:24:00');

router.get('/:name', function(req, res, next) {
  res.json(
    {
      "name": "lightbulb",
      "status": "on",
      "type": "led",
      "last-change": fakeDay
    }
  );
});

module.exports = router;
