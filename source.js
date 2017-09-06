// Start with some Pseudo code
// IDEA: Function which takes input of n and then converts it to roman numerals.
// NOTE: Here's the roman numerals
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
// NOTE: I use the JSX standard styleguide for Javascript, which argues that line endings () are bad practice except in certain exempt circumstances and at the end of the function. https://standardjs.com/rules.html
// IDEA: Split into object of thousands, hundreds, tens and units. for each thousand echo a M, D, etc. etc.
numeral = "M X C"
function getMultiplesOfTen(number) {
  document.getElementById('result').innerHTML = "";
  number = parseInt(number);
  if (typeof(number) !== "number") return number;
  var result = {};

  (function breakDown(num) {
    if (isNaN(num)) return num; //if it's invalid return
    if (num <= 0) return false;
    num = num.toFixed(0); //get rid of decimals

    var divisor = Math.pow(10, num.length - 1), //ex. when num = 300, divisor = 100
      quotient = Math.floor(num / divisor);
    result[divisor] = quotient; //add it to our object
    breakDown(num % divisor); //break down the remainder
  })(number);
  //return result as an object
  return result;
}

//helper functions for visual only
var input = document.getElementById('input');
var result = document.getElementById('result');

input.onkeyup = function results() {
  var obj = getMultiplesOfTen(input.value);
  for (var prop in obj) {
    var table = document.getElementById('result'),
      tr = document.createElement('tr'),
      th = document.createElement('th'),
      td = document.createElement('td');
    //add data
    td.innerHTML = obj[prop] + " multiples of ";
    th.innerHTML = prop;

    //add nodes to table
    tr.appendChild(td);
    tr.appendChild(th);


    table.appendChild(tr);
  }

}
