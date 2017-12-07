
//BackEnd Logic
function translate(numbers) {
  var roman = [];

  if (parseInt(numbers.join('')) === 1) {
    roman.push("I");
 } else if (parseInt(numbers.join('')) === 4){
   roman.push("IV");
 } else if (parseInt(numbers.join('')) === 5){
   roman.push("V");
 } else if (parseInt(numbers.join('')) === 9){
   roman.push("IX");
 } else if (parseInt(numbers.join('')) === 10){
   roman.push("X");
 } else if (parseInt(numbers.join('')) === 50){
   roman.push("L");
 } else if (parseInt(numbers.join('')) === 100){
   roman.push("C");
 } else if (parseInt(numbers.join('')) === 500){
   roman.push("D");
 } else if (parseInt(numbers.join('')) === 1000){
   roman.push("M");
 }else {
     alert("OK");
   }
  console.log(roman);
  };









//Front End Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = $("#input").val();
    var numbers = userInput.split('');
    var example = parseInt(numbers.join(''));
        translate(numbers);
console.log(example);
console.log(numbers);
//console.log(example);
  });
});
