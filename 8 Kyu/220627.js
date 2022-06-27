/* Enumerable Magic #25 - Take the First N Elements
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.*/

function take(arr, n) {
  let newArr = arr.slice(0, n)
  return newArr
}

/* String Templates - Bug Fixing #5
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!*/

function buildString(...template){
    return (`I like ${template.join(', ')}!`);
}

