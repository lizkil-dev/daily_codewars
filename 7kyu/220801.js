/* Get the divisors of a number
DESCRIPTION:
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30) */

function getDivisorsCnt(n){
  let result = 0
    for(let i = 1; i <= n; i++){
      if(n % i == 0){
        result++
      }
    }
  return result
}

/* Number of decimal digit
DESCRIPTION:
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid. */ 

function digits(n) {
  let result = n.toString().split('')
  return result.length
}