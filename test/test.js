var argumentParser = require('../argumentParser');

describe('passing arguments', function() {
    it("should take arguments", function(){
      argumentParser({
        'zap': 'bar'
      });
      return 1;
    });
})

describe('passing a function', function() {
    process.argv = ['--fake'];
    it("should call the function", function(done){
      argumentParser({
        'fake': {
          action: function() {
            done();
          }
        }
      });
    });
})