/* Beginner - Reduce but Grow

DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

// function grow(x){
//   sum = 1
//   for (let i = 0; i < x.length; i++){
//     sum *= x[i] 
//   }
//  console.log(sum);
// }

//or 

const grow = x => console.log(x.reduce((a, b) => a*b))

grow([2, 2, 2, 2, 2, 2]) // 64
grow([1, 2, 3, 4])


/* DESCRIPTION:
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great' */

function smash(x){
  console.log(x.join(' '))

}

smash(["this", "is", "a", "really", "long", "sentence"]) // "this is a really long sentence");