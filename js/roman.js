//BackEnd Logic
export class RomanNum {
 constructor() {}
 ones(numbers) {
  //debugger;
  let roman = [];
  let ones = parseInt(numbers.reverse().slice(0));
  if (ones < 4) {
      let count = ones - 1
      for (i=0; i < count + 1; i++) {
        roman.push("I");
      } return roman;
  } else if (ones === 4) {
    roman.push("IV");
    return roman;
  } else if (ones >= 5 && ones !== 9) {
      roman.push("V");
      let count = ones - 5
      for (i=0; i < count; i++) {
        roman.push("I");
        } return roman;
  } else if (ones === 9){
      roman.push("IX");
      return roman;
  } else {
    console.log(roman);
  }
}

tens(numbers) {
  // debugger;
  let roman = [];
  let tens = parseInt(numbers.slice(1));
  console.log(tens);
  if (tens < 4) {
      let count = tens - 1
      for (i=0; i < count + 1; i++) {
        roman.push("X");
      } return roman;
  } else if (tens === 4) {
    roman.push("XL");
    return roman;
  } else if (tens >= 5 && tens !== 9) {
      roman.push("L");
      let count = tens - 5;
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
}
