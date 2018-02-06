(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//BackEnd Logic
var RomanNum = exports.RomanNum = function () {
  function RomanNum() {
    _classCallCheck(this, RomanNum);
  }

  _createClass(RomanNum, [{
    key: "ones",
    value: function ones(numbers) {
      //debugger;
      var roman = [];
      var ones = parseInt(numbers.reverse().slice(0));
      if (ones < 4) {
        var count = ones - 1;
        for (i = 0; i < count + 1; i++) {
          roman.push("I");
        }return roman;
      } else if (ones === 4) {
        roman.push("IV");
        return roman;
      } else if (ones >= 5 && ones !== 9) {
        roman.push("V");
        var _count = ones - 5;
        for (i = 0; i < _count; i++) {
          roman.push("I");
        }return roman;
      } else if (ones === 9) {
        roman.push("IX");
        return roman;
      } else {
        console.log(roman);
      }
    }
  }, {
    key: "tens",
    value: function tens(numbers) {
      // debugger;
      var roman = [];
      var tens = parseInt(numbers.slice(1));
      console.log(tens);
      if (tens < 4) {
        var count = tens - 1;
        for (i = 0; i < count + 1; i++) {
          roman.push("X");
        }return roman;
      } else if (tens === 4) {
        roman.push("XL");
        return roman;
      } else if (tens >= 5 && tens !== 9) {
        roman.push("L");
        var _count2 = tens - 5;
        for (i = 0; i < _count2; i++) {
          roman.push("X");
        }return roman;
      } else if (tens === 9) {
        roman.push("XC");
        return roman;
      } else {
        console.log(roman);
      }
    }
  }]);

  return RomanNum;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _roman = require("./../js/roman.js");

//Front End Logic
$(document).ready(function () {
  $("#formOne").submit(function () {
    event.preventDefault();
    var romanNum = new _roman.RomanNum();
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

},{"./../js/roman.js":1}]},{},[2]);
