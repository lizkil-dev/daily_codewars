/* What is between?
  Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

  For example:
  a = 1
  b = 4
  --> [1, 2, 3, 4] */

//My Solution

function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++){
    arr.push(i)
  }
  return arr
}

/* The feast of many beasts
  All of the animals are having a feast! Each animal is bringing one dish. There is just one rule:
  the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan
  and the chickadee is bringing chocolate cake. Write a function feast that takes the animal's name and dish as arguments and returns
  true or false to indicate whether the beast is allowed to bring the dish to the feast. Assume that beast and dish are always lowercase strings,
  and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.
  They will not contain numerals. */

//My Solutions
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
