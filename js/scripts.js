
//BackEnd Logic
function translate(numbers) {
  var roman = [];
  var parsedNumber = parseInt(numbers.join(''));

  if (parseInt(numbers.join('')) > 3999) {
      alert("Too high");
      return false;
    } else if (parsedNumber === 1) {
        roman.push("I");
     } else if (parsedNumber === 4){
       roman.push("IV");
     } else if (parsedNumber === 5){
       roman.push("V");
     } else if (parsedNumber === 9){
       roman.push("IX");
     } else if (parsedNumber === 10){
       roman.push("X");
     } else if (parsedNumber === 50){
       roman.push("L");
     } else if (parsedNumber === 100){
       roman.push("C");
     } else if (parsedNumber === 500){
       roman.push("D");
     } else if (parsedNumber === 1000){
       roman.push("M");
     } else {
         alert("OK");
    }

  if (numbers.length === 1 && parsedNumber < 4) {
    //debugger;
    var count = parsedNumber - 1
    for (i=0; i < count + 1; i++) {
      roman.push("I");
    }
    console.log(roman);
  } else {
    console.log("!");
  }

  console.log(count);

};









//Front End Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = $("#input").val();
    var numbers = userInput.split('');
    //var example = parseInt(numbers.join(''));
        translate(numbers);
//console.log(example);
console.log(numbers);
//console.log(example);
  });
});
