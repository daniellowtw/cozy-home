// Generated by CoffeeScript 1.7.1
var Device, americano;

americano = require('americano-cozy');

module.exports = Device = americano.getModel('Device', {
  login: String,
  configuration: Object
});

Device.all = function(params, callback) {
  return Device.request("all", params, callback);
};
