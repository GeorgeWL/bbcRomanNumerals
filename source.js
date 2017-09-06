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
var I = 1
var V = 5
var X = 10
var L = 50
var C = 100
var D = 500
var M = 1000
// I use the JSX standard styleguide for Javascript, which argues that line endings (;) are bad practice except in certain exempt circumstances and at the end of the file. https://standardjs.com/rules.html

(function () {
  let number = document.querySelector('input')
  let btn = document.querySelector('button')
  let numeral = document.querySelector('.numeral')

  btn.addEventListener('click', () => {
    let numberTo = number.value
  })
})()
