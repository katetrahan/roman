
//BackEnd Logic
//this function checks for "special" characters
function special(numbers) {
  var roman = [];
  var parsedNumber = parseInt(numbers.join(''));
  if ((parsedNumber) > 3999) {
      // alert("Too high");
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
     } else if (parsedNumber === 40) {
       roman.push("XL");
     } else if (parsedNumber === 50){
       roman.push("L");
     } else if (parsedNumber === 100){
       roman.push("C");
     } else if (parsedNumber === 400) {
       roman.push("CD");
     } else if (parsedNumber === 500){
       roman.push("D");
     } else if (parsedNumber === 1000){
       roman.push("M");
     } else {
         alert("OK");
    }
    console.log(roman);
  };

//this function checks for every other number
function translate(numbers) {
  debugger;
  var roman = [];
  var parsedNumber = parseInt(numbers.join(''));
  var ones = parseInt(numbers.reverse().slice(0));
  var tens = parseInt(numbers.slice(1));
  var hundreds = parseInt(numbers.slice(2));
  var thousands = parseInt(numbers.slice(3));

  // console.log(ones);
  // console.log(tens);
  // console.log(parsedNumber);
  // console.log(numbers);

//this section is looking for 2 and 3
  if (numbers.length === 1 && parsedNumber !== 1 && parsedNumber < 4) {
    var count = ones - 1
    for (i=0; i < count + 1; i++) {
      roman.push("I");
    }
    //this section is looking for 6-8
  } else if (numbers.length === 1 && parsedNumber !== 9 && parsedNumber > 5) {
    roman.push("V");
    var count = ones - 5
    for (i=0; i < count; i++) {
      roman.push("I");
    }
  } else if (numbers.length === 2 && parsedNumber !== 10 && parsedNumber < 50 && numbers[0] !== "9"  && numbers[0] !== "4" && numbers[0] !== "5") {
    var countTen = tens - 1
    for (i=0; i < countTen + 1; i++) {
      roman.push("X");
    }   var count = ones - 1
      for (i=0; i < count + 1; i++) {
        roman.push("I");
      }
    } else if (numbers.length === 2 && parsedNumber < 50 && numbers[0] === "4") {
      var countTen = tens - 1
      roman.push("IV");
      for (i=0; i < countTen + 1; i++) {
        roman.unshift("X");
    }
  } else if (numbers.length === 2 && parsedNumber < 50 && numbers[0] === "5") {
    var countTen = tens - 1
    roman.push("V");
    for (i=0; i < countTen + 1; i++) {
      roman.unshift("X");
  }
}
  else {
    console.log("-");
  }
console.log(roman);
  console.log(count);

};



//Front End Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = $("#input").val();
    var numbers = userInput.split('');
    //var example = parseInt(numbers.join(''));
    special(numbers);
    translate(numbers);
//console.log(example);
console.log(numbers);
//console.log(example);
  });
});
