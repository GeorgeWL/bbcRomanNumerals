// Start with some Pseudo code
// IDEA: Variable that takes the number(n)
// IDEA: Function which takes input of n and then converts it to roman numerals.
// IDEA: If divisible by 10 equally, repeat X for each divisible
// IDEA: If divisible by 5 equally, repeat V for each divisible
// IDEA: For each remainder print I
// IDEA: for every 5 tens repeat L instead
// IDEA: for every 10 tens repeat C instead
// IDEA: For every fifty tens, repeat D instead
// IDEA: for every 100 tens, repeat M instead
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
// I use the JSX standard styleguide for Javascript, which argues that line endings (;) are bad practice except in certain exempt circumstances and at the end of the function. https://standardjs.com/rules.html
// IDEA: Split into array of thousands, hundreds, tens and units. for each thousand echo a M, etc. etc.
(function () {
  let number = document.querySelector('input')
  let btn = document.querySelector('button')
  // let numeral = document.querySelector('#numeral')

  btn.addEventListener('click', () => {
    // let numberTo = number.value
  })
})()
var number = 3999
var quotient = 0
var quotient1 = 0
var quotient2 = 0
var remainder = 0
var remainder1 = 0
function numerals (number) {
  // Begin with a test case of hard-coded 3999
  quotient = number / 1000 // This will give you 3
  remainder = number % 1000 // This will give you 999
  quotient1 = remainder / 100 // This will give you 9
  remainder1 = remainder % 100 // This will give you 90
  quotient2 = remainder1 / 10 // This will give you 9
  document.getElementById('numeral').textContent=numeral
}
