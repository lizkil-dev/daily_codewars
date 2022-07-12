/* DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

// function DNAStrand(dna){
//   let array = dna.split('')

//   let complement = []

//   array.forEach(element => {
//     if(element == 'A'){
//       complement.push('T')
//     }else if(element == 'T'){
//       complement.push('A')
//     }else if(element == 'G'){
//       complement.push('C')
//     }else if(element == 'C'){
//       complement.push('G')
//     }    
//   });
//   return complement.join('')
// }




/* The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1] */

function removeSmallest(numbers) {
  let newArray = [...numbers]
  let indexOfSmallest = newArray.indexOf(Math.min(...newArray))

  newArray.splice(indexOfSmallest, 1)
  return newArray
}

