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
  let set = new Set(s)
  s.length % set.size != 0 ? console.log(false) : console.log(true);;
}

// validateWord('qWm$^zi&NpOZxqLh7e%5Agundefined3L&dNY4kkgNI4$17075W!bHp:Ftw34!Xwta:')
validateWord('abcabc') //,true, "The word was: \"Abcabc\" \n");
validateWord("abc123")// true, "The word was: \"abc123\" \n");
validateWord("abcabcd") //false, "The word was: \"abcabcd\" \n");
// validateWord("abc!abc!") //true, "The word was: \"abc!abc!\" \n")