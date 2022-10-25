/* Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */


function fakeBin(x){
  let array = x.split('')
  let bin = []
  
  array.forEach(element => {
    if(element < 5){
      bin.push(0)
    }else{
      bin.push(1)
    }
  });

  console.log(bin)
  

}

fakeBin('45385593107843568') // '01011110001100111'