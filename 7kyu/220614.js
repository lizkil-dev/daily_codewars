/*Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

//My Solution

const XO = (str) => {
  array = str.toLowerCase().split('');
  if (array.filter(x => x == 'x').length === array.filter(o => o == 'o').length){
    return true
  }else return false
}

//or

function XO(str) {
  let array = str.toLowerCase().split('');
  let xLetters = []
  let oLetters = []
  array.forEach(element => { 
    element == "x" ? xLetters.push(element) : element == "o" ? oLetters.push(element) : undefined    
  });
  if (xLetters.length == oLetters.length) {
    return true
  }else if (xLetters.length == 0 && oLetters.length == 0){
    return true
  }else return false
}



