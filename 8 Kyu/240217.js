/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */


// function sumMix(x){
  
//   let array = x.map(el => el = Number(el))
//   let sum = array.reduce((acc, cur) => acc += cur, 0)
//   console.log(sum);
// }


const sumMix = x => x.reduce((a, c) => a + +c)

sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) // 42