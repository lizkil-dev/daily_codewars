/* Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! */

function createPhoneNumber(numbers){
  let pre = numbers.splice(0, 3)
  pre.push(")")
  pre.unshift('(')
  pre.push(' ')
  let middle = numbers.splice(0, 3)
  middle.push('-')
  let phone = pre.concat(middle, numbers)
  return phone.join('')
}


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])