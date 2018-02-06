
import { RomanNum } from './../js/roman.js';
//Front End Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var romanNum = new RomanNum();
    var userInput = $("#input").val();
    var numbers = userInput.split('');
    var oneResult = romanNum.ones(numbers);
    var tenResult = romanNum.tens(numbers);
    //var example = parseInt(numbers.join(''));
    //special(numbers);
//console.log(example);
console.log(numbers);
console.log(oneResult);
console.log(tenResult);
//console.log(example);
  });
});
