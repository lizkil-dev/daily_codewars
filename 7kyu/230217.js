/* Character Counter

You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word. */ 


// function validateWord(s){
//   s = s.toLowerCase()
//   let set = new Set(s)
//   s.length % set.size != 0 ? console.log(false) : console.log(true);;
// }




/* In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck! */

// function repeats(arr){
//   console.log(arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((a, c) => a + c, 0))
//   };


function repeats(arr){

  let set = new Set()

  arr.forEach(el => set.has(el) ? set.delete(el) : set.add(el))
  let result = [...set].reduce((a, c) => a + c, 0)
  console.log(result);
}

  repeats([4,5,7,5,4,8]) // 15)
  repeats([9, 10, 19, 13, 19, 13])// 19)
  repeats([16, 0, 11, 4, 8, 16, 0, 11])// 12)
  repeats([5, 17, 18, 11, 13, 18, 11, 13])// 22);