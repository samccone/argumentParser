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
});

describe('getting params', function() {
  process.argv = ['--fake', '2'];
  it("should call the function", function(done){
    argumentParser({
      'fake': {
        action: function(opts) {
          opts != undefined && opts[0] == 2 && done()
        },
      }
    });
  });
});