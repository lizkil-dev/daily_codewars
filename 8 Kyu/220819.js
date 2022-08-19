/* get character from ASCII Value
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A' */


function getChar(c){
  let char = String.fromCharCode(c);
  console.log(char);
}

getChar(56)