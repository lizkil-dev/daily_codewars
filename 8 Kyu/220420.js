/* Lost without a map:
Given an array of integers, return a new array with each value doubled.
For example: [1, 2, 3] --> [2, 4, 6] */

//Solution//

function maps(x){
 return x.map(n => n*2)
}


/* Simple multiplication:
This kata is about multiplying a given number by eight if it is an even number
and by nine otherwise.*/

let simpleMultiplication = number => number % 2 === 0 ? number *= 8 : number *=9
