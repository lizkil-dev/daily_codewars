/* Sum of positive
  You get an array of numbers, return the sum of all of the positives ones.
  Example [1,-4,7,12] => 1 + 7 + 12 = 20
  Note: if there is nothing to sum, the sum is default to 0. */


// My Solutions: 

function positiveSum(arr) {
  let sum = 0
  for(e of arr){
   if(e >= 0){
     sum = sum + e
   }
 }
  return sum;
}

// or

const positiveSum = arr => {
  return arr.reduce((acc, c) => acc + (c > 0 ? c : 0), 0);
  }
  
