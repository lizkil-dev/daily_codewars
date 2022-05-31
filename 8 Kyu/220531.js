/* Calculate average
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0. */

// My Solution
function find_average(array) {
 return array.length === 0 ? 0 : array.reduce((acc, c) => acc + c,0) / array.length
  }


/* Returning Strings
Make a function that will return a greeting statement that uses an input;
your program should return, "Hello, <name> how are you doing today?". */

//My Solution

function greet(name){
  return`Hello, ${name} how are you doing today?`
}
