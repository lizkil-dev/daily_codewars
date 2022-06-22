/* Summing a number's digits
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5 */


function sumDigits(number) {
 let array = Array.from(String(number), Number)

 let numArray = (array.filter((el) => isNaN(el) == false ))
 let sum = numArray.reduce((prev, curr) => prev += curr);
 console.log(sum)
}

