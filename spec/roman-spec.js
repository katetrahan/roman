var  RomanNum = require ('./../js/roman.js').moduleRoman;

describe('RomanNum', function(){

  it('should show I when 1 is entered', function() {
     let number = new RomanNum()
     expect(number.ones([1])).toEqual(['I']);

  })

})
