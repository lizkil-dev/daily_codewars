/* nth smallest element
Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.*/



function nthSmallest(arr, pos){
  let sorted = arr.sort((a, z) => a - z)
  console.log(sorted[pos-1]);
}

nthSmallest([3,1,2], 2) //  2);
nthSmallest([15,20,7,10,4,3], 3) //  7);
nthSmallest([-5,-1,-6,-18], 4) // -1);