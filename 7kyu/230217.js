/* Character Counter

You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word. */ 


function validateWord(s){
  s = s.toLowerCase()
  let map = new Map ()
  let count = 0;
 
  for(let key of s){
    map.set(key, count)
  }
 
  for(let key of s){
    count = map.get(key)    
    map.set(key, count + 1)
  }
  
  let array = []
  for(let [key, value] of map){
    array.push(value)
  }

  console.log(array);
  
  
  let sum = array.reduce((acc, cur) => acc + cur, 0) 
  let even = sum / array.length

  console.log(sum);
  console.log(even);
  even - Math.floor(even) == 0 ? console.log(true) : console.log(false);;
}

