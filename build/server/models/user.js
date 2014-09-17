// Generated by CoffeeScript 1.7.0
var EMAILREGEX, User, americano, emailValidator;

americano = require('americano-cozy');

module.exports = User = americano.getModel('User', {
  email: String,
  public_name: String,
  timezone: {
    type: String,
    "default": "Europe/Paris"
  },
  password: String,
  owner: {
    type: Boolean,
    "default": false
  },
  activated: {
    type: Boolean,
    "default": false
  }
});

EMAILREGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailValidator = function(err) {
  if (!EMAILREGEX.test(this.email)) {
    return err();
  }
};

User.validate('email', emailValidator, {
  message: 'Given email is not a proper email.'
});

User.all = function(callback) {
  return User.request("all", callback);
};

User.destroyAll = function(callback) {
  return User.requestDestroy("all", callback);
};
