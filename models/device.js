var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DeviceSchema   = new Schema({
  name: String,
  status: String,
  type: String,
  'last-change': Date
});

module.exports = mongoose.model('Device', DeviceSchema);
