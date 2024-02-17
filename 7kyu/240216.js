/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

function stray(numbers) {
 console.log(numbers.sort())

 let sorted = numbers.sort()
 
 sorted[0] !== sorted[1] ? sorted[0] : sorted[sorted.length -1]

}

 stray([1, 1, 2]) // 2
stray([17, 17, 3, 17, 17, 17, 17]) // 30
stray([3, 3, 17, 3, 3])