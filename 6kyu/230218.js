
/* Array combinations

DESCRIPTION:
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates. */

// function solve(arr) {
 
// console.log(arr.reduce((a, c) => a *= new Set(c).size, 1))
  
// };


// solve([[1,2],[4],[5,6]])// 4
// solve([[1,2],[4,4],[5,6,6]])// 4
// solve([[1,2],[3,4],[5,6]])// 8
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]) // 2


/* Duplicate Encoder

ESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */


function duplicateEncode(word){

  let result = []
  let array = word.split('')
  
  array.map(el => array.lastIndexOf(el) == array.indexOf(el) ? result.push('(') : result.push(')'))
  console.log(result.join(''));
}


duplicateEncode("din") //"(((";
duplicateEncode("recede") // "()()()"


