/* Round up to the next multiple of 5
   Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
   Examples:
   input:    output:
   0    ->   0
   2    ->   5
   3    ->   5
   12   ->   15
   21   ->   25
   30   ->   30
   -2   ->   0
   -5   ->   -5
  etc.  */

//My Solution

const roundToNext5 = (n) => Math.ceil(n/5) * 5



/* Disemvowel Trolls

  Trolls are attacking your comment section!
  A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
  Your task is to write a function that takes a string and return a new string with all vowels removed.
  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  Note: for this kata y isn't considered a vowel. */

// My Solution

const disemvowel = (str) => {
  let array = str.split('')
  let noVowels = []
  array.forEach(x => { if (x.toLowerCase() !== 'a' && x.toLowerCase() !== 'e' && x.toLowerCase() !== 'i' && x.toLowerCase() !== 'o' && x.toLowerCase() !== 'u') {
    noVowels.push(x)
  }
  })
  return noVowels.join('')
};
