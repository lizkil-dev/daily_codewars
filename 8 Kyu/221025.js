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

/* You only need one 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.*/
  
function check(a, x) {
 return a.includes(x) ? true: false;
}
