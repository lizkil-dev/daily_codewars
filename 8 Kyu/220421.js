/* Do you speak English? 
   Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
   The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
   Upper or lower case letter does not matter -- "eNglisH" is also correct.
   Return value as boolean values, true for the string to contains "English", false for it does not. */

// My solution //

function spEng(sentence){
  let word = 'English'
  sentence = sentence.toLowerCase()
  
  return sentence.includes(word.toLowerCase()) ? true : false
}


/* MakeUpperCase
   Write a function which converts the input string to uppercase. */
   
// My solution //

function makeUpperCase(str) {
 
  return str.toUpperCase()
}


/* How good are you really?
   There was a test in your class and you passed it. Congratulations!
   But you're an ambitious person. You want to know if you're better than the average student in your class.
   You receive an array with your peers' test scores. Now calculate the average and compare your score!
   Return True if you're better, else False!

  Note:
  Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */

 // My solution //
 
  function betterThanAverage(classPoints, yourPoints) {
 
    let sum = 0
    classPoints.forEach(x => sum += x)

    let totalsum = sum + yourPoints
    let average = totalsum / (classPoints.length + 1)
    

    if (yourPoints > average){
      return true
    }else {
      return false
    }
   
}
