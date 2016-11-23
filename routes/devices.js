var express = require('express');
var router = express.Router();
var devices = require("../data/devices");
var Device = require('../models/device');

// create a device (accessed at POST http://localhost:3000/devices)
router.post('/', function(req, res) {

  var device = new Device();
  device.name = req.body.name;
  device.status = req.body.status || "off";
  device.type = req.body.type;
  device['last-change'] = req.body['last-change'] || new Date();

  device.save(function(err) {
    if (err)
      res.send(err);

    res.json({
      message:
        'Device created!'
    });
  });
});

/* GET devices listing. */
router.get('/', function(req, res, next) {
  Device.find(function(err, devices) {
    if (err)
      res.send(err);

    res.json(devices);
  });
});

var fakeDay = new Date('November 20, 2016 03:24:00');

router.get('/:name', function(req, res, next) {
  Device.findOne({ 'name': req.params.name }, function (err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
});

module.exports = router;
