/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending){

 
  let slice = str.slice(-ending.length)
  if(ending.length > 0){
  return slice == ending ? true : false
  }else return true


}

