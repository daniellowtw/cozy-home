// Generated by CoffeeScript 1.9.0
var Adapter, client, request;

request = require("request-json");

client = request.newClient("http://localhost:9101/");

module.exports = Adapter = (function() {
  function Adapter() {}

  Adapter.prototype.updateKeys = function(pwd, callback) {
    var name, token;
    if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
      name = process.env.NAME;
      token = process.env.TOKEN;
      client.setBasicAuth(name, token);
    }
    return client.put("accounts/password/", {
      password: pwd
    }, (function(_this) {
      return function(err, res, body) {
        return callback(err);
      };
    })(this));
  };

  Adapter.prototype.initializeKeys = function(pwd, callback) {
    var name, token;
    if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
      name = process.env.NAME;
      token = process.env.TOKEN;
      client.setBasicAuth(name, token);
    }
    return client.post("accounts/password/", {
      password: pwd
    }, (function(_this) {
      return function(err, res, body) {
        return callback(err);
      };
    })(this));
  };

  Adapter.prototype.updateUser = function(user, data, callback) {
    var name, token;
    if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
      name = process.env.NAME;
      token = process.env.TOKEN;
      client.setBasicAuth(name, token);
    }
    return client.put("user/merge/" + user.id, data, (function(_this) {
      return function(err, res, body) {
        return callback(err);
      };
    })(this));
  };

  return Adapter;

})();
