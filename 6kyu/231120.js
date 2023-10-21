/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str){
  let splitStr
  splitStr = str.split('-').join(',').split('_').join(',').split(',')
  console.log('array:', splitStr);
  let first = splitStr[0].split('')
  console.log('first:', first)
  let result
  if (str){
    let camelCase = splitStr.filter((el, i) => i > 0).map(el => el.charAt(0).toUpperCase() + el.slice(1))
    result = splitStr[0] + camelCase.toString().replaceAll(',', '')
  }else {
    result = str
  }
  console.log('result:', result)
}


toCamelCase('') // '', "An empty string was provided but not returned")
toCamelCase("the_stealth_warrior") // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")

