/* Beginner - Reduce but Grow

DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

// function grow(x){
//   sum = 1
//   for (let i = 0; i < x.length; i++){
//     sum *= x[i] 
//   }
//  console.log(sum);
// }

//or 

const grow = x => console.log(x.reduce((a, b) => a*b))

grow([2, 2, 2, 2, 2, 2]) // 64
grow([1, 2, 3, 4])