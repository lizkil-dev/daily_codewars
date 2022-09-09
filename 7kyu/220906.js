/* DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */


function addBinary(a,b) {
  let quotient = a+b
  let binary = []
  
  while(quotient >= 1){
    let remainder = Math.floor(quotient) % 2
    binary.unshift(remainder)
    quotient = Math.floor(quotient / 2)
  }
  return binary
 }


 


