/* Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str){
  let punctuation = ['.', ',', ':', '!', '?', ';']
  let result = str.split(' ').map(word => word.slice(1) + word[0] + (punctuation.includes(word) ? '' : 'ay')).join(' ')
  console.log(result);
  
}

pigIt('This is my string !')

