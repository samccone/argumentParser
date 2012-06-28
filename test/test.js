var argumentParser = require('../argumentParser');

describe('passing arguments', function() {
    it("should take arguments", function(){
      argumentParser({
        'foo': 'bar'
      });
      return 1;
    });
})