(function() {
  var printHelp;

  module.exports = function(options) {
    var arg, parsedArg, _i, _len, _ref, _results;
    options.help = {
      action: printHelp
    };
    _ref = process.argv;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      arg = _ref[_i];
      if ((arg[0] === '-' && arg[1] === '-') || (arg[0] === '-' && arg[1] !== '-')) {
        parsedArg = arg.indexOf('--') !== -1 ? arg.substring(2, arg.length) : arg.substring(1, arg.length);
        if (options[parsedArg] !== void 0) {
          if (options[parsedArg].action) {
            _results.push(options[parsedArg].action());
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  printHelp = function() {
    return console.log("This is the Help!");
  };

}).call(this);
