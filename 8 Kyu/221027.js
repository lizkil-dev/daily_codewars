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

const grow = x => x.reduce((a, b) => a*b)

grow([2, 2, 2, 2, 2, 2]) // 64
grow([1, 2, 3, 4])


/* DESCRIPTION:
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great' */

function smash(x){
  return x.join(' ')

}

smash(["this", "is", "a", "really", "long", "sentence"]) // "this is a really long sentence");


/* Get the mean of an array 
DESCRIPTION:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

// function getAverage(marks){
//   let sum = marks.reduce((a, b) => a+b)
//   let average = sum / marks.length
//   return Math.floor(average)
// }

//or 

const getAverage = marks => Math.floor((marks.reduce((a, b) => a+b)) / marks.length)

getAverage([1,2,3,4,5,]) // 3

/* Array plus array
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too */

function arrayPlusArray(arr1, arr2) {
  let masterarray = [...arr1, ...arr2]
  console.log(masterarray.reduce((a, b) => a+b));
}

arrayPlusArray([1, 2, 3], [4, 5, 6]) // 21);
arrayPlusArray([-1, -2, -3], [-4, -5, -6]) // -21);
arrayPlusArray([0, 0, 0], [4, 5, 6]) // 15)



