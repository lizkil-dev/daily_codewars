/* Sum Mixed Array
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number. */

function sumMix(x){
  x.forEach (n => {n += n})
   return(n)

}
sumMix([1, "2", 3, "4"])