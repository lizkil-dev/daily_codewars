/* Vowel Count
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

//My Solution

let getCount = (str) => {
  let array = str.split('')
  let vowels = []

  array.forEach(element => {if(element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
    vowels.push(element)
 }
 
  });
  return(vowels.length);
}
