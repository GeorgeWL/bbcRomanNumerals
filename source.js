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
// NOTE: I use the JSX standard styleguide for Javascript, which argues that line endings () are bad practice except in certain exempt circumstances (such as inline functions and functions starting with brackets.)
// https://standardjs.com/rules#semicolons which is an interface that uses the rules of
// IDEA: Scrap the multiples of ten idea completely actually. Lookup Array might be cleaner and simpler
numeral = 'MXC'
// testing numeral output from web form with hard-coded output

// getRomanNumeral
// Gets the roman numeral for a number between 1 and 3999 (not yet tested beyond this)

const getRomanNumeral = function (target) {
  // only accept numbers
  if (typeof target !== 'number') {
    throw new Error(`Target must be of type 'number', found ${typeof target}`)
  }
  // only accept whole numbers
  if (target.toString().includes('.')) {
    throw new Error(`Target must be an whole number`)
  }
  // set result as equal to contents
  let result = ''

  // lookup table containing numerals and their number equivalents
  let keys = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  for (let numeral in keys) {
    // for each numeral in keys
    while (target >= keys[numeral]) {
      // while target is gte the value of the numeral
      result += numeral
      // add the numeral to the result
      target -= keys[numeral]
      // remove the value from the target number
    }
  }

  return result
  // TODO: output result to the span on the form.
  // NOTE: I've accidenatlly forgotten the function for this, will quickly save here, look it up, then think this should actually be the final version.
}
