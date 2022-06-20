/* Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8  */

const summation = (num) => {
  let sum = 0
  for(let i = 0; i <= num; i++){
    sum += i
  }
  return sum
}

/* Counting sheep
 Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.*/

function countSheeps(arrayOfSheep) {
  let count = 0
  arrayOfSheep.forEach((el) => el == true && count++) 
  return count
}