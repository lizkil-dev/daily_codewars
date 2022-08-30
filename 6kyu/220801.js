/* Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times */


function duplicateCount(text){
  let lowerCase = text.toLowerCase()
  let duplicates = []
  for(let i = 0; i < lowerCase.length; i++){
    for(let j = i+1; j < lowerCase.length; j++){
      if(lowerCase[i] == lowerCase[j]){
        duplicates.push(lowerCase[j])
      }
    }
  }

  let result = [...new Set(duplicates)]
  return result.length
}

