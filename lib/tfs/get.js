var tf     = require('../utils/tf'),
    output = require('../utils/output');

var get = function() {
  tf('get', [], function() {
    console.log(123);
  });
}

module.exports = get;