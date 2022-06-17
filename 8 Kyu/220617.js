/* Sum without highest and lowest number
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6 */

// My Solution

function sumArray(array) {
  if (array == null) {
    return 0
  }else{
    let sum = 0
    let newArray = array.sort((a, b) => a-b, 0)
    for (let i = 1; i < newArray.length - 1; i++){
        sum += newArray[i]
    }  
    return sum 
}
}