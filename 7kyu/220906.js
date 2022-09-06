function addBinary(a,b) {
  let quotient = a+b
  let binary = []
  

  while(quotient >= 1){
    let remainder = Math.floor(quotient) % 2
    console.log(remainder);
    binary.unshift(remainder)
    quotient = Math.floor(quotient / 2)
  }
  console.log(binary);
 }


 addBinary(5, 9) // 5 + 9 = 14 in decimal or 1110 in binary)


