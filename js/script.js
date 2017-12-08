//BackEnd Logic

function ones(numbers) {
  //debugger;
  var roman = [];
  var ones = parseInt(numbers.reverse().slice(0));
  if (ones < 4) {
      var count = ones - 1
      for (i=0; i < count + 1; i++) {
        roman.push("I");
      } return roman;
  } else if (ones === 4) {
    roman.push("IV");
    return roman;
  } else if (ones >= 5 && ones !== 9) {
      roman.push("V");
      var count = ones - 5
      for (i=0; i < count; i++) {
        roman.push("I");
        } return roman;
  } else if (ones === 9){
      roman.push("IX");
      return roman;
  } else {
    console.log(roman);
  }
};

function tens(numbers) {
  // debugger;
  var roman = [];
  var tens = parseInt(numbers.slice(1));
  console.log(tens);
  if (tens < 4) {
      var count = tens - 1
      for (i=0; i < count + 1; i++) {
        roman.push("X");
      } return roman;
  } else if (tens === 4) {
    roman.push("XL");
    return roman;
  } else if (tens >= 5 && tens !== 9) {
      roman.push("L");
      var count = tens - 5;
      for (i=0; i < count; i++) {
        roman.push("X");
        } return roman;
  } else if (tens === 9){
      roman.push("XC");
      return roman;
  } else {
    console.log(roman);
  }
}


//Front End Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = $("#input").val();
    var numbers = userInput.split('');
    var oneResult = ones(numbers);
    var tenResult = tens(numbers);
    //var example = parseInt(numbers.join(''));
    //special(numbers);
//console.log(example);
console.log(numbers);
console.log(oneResult);
console.log(tenResult);
//console.log(example);
  });
});
