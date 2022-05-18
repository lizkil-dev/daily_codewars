/* List Filtering
  In this kata you will create a function that takes a list of non-negative integers
  and strings and returns a new list with the strings filtered out.
  Example
  filter_list([1,2,'a','b']) == [1,2]
  filter_list([1,'a','b',0,15]) == [1,0,15]
  filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

//My Solution
function filter_list(l) {
  return l.filter((e) => e = typeof = Number)  
}


/* Training on Mumbling
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"   */

//My Solution
function accum(s) {
 return s.split('').map((e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i))).join('-');
}

