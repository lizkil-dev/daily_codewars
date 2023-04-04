/* The avarage length
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3 */

function averageLength(arr){
 let length = Math.round(arr.map(el => el = el.length).reduce((sum, c) => sum += c, 0) / arr.length)
 console.log(arr.map(el => el[0].repeat(length)))

}


averageLength(['u', 'y'])// ['u', 'y']);
averageLength(['aa', 'bbb', 'cccc'])// ['aaa', 'bbb', 'ccc']);
averageLength(['aa', 'bb', 'ddd', 'eee'])// ['aaa', 'bbb', 'ddd', 'eee']);