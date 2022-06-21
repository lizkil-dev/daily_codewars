/* Count characters in your string
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count (string) {  
  const counts = {}
  string.split('').forEach((el) => {
  counts[el] = (counts[el] || 0) + 1;
  });
  return counts 
}

/*Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
  let array = s.split(' ')
  array.sort((a, b) => a.length - b.length)
  return array[0].length
}


