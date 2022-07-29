/* Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str){

  //divide str in multiple arrays, each array contains one word
  let wordArray = str.split(' ')

  let eachWord = []
  wordArray.map((el) => eachWord.push(Array.from(el)))

  // move first element of each word to last index
  eachWord.map((el) => el.push(el.shift()))
  
   // ad the letters ay at the end of the word
   eachWord.forEach((el) => {if(el != '!' && el != '.' && el != ',' && el != '?' && el != ':'){
    el.push('a', 'y')
   }
   })    

  //bring words together again into one string with empty spaces between words
  
  let sentence = [...eachWord]

  let string = sentence.join(' ')

  let withoutCommas = string.replace(/,/g, '')
  return withoutCommas
 
}

pigIt('This is my string !')

