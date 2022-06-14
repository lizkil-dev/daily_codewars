/*Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

//My Solution

const XO = (str) => {
  array = str.toLowerCase().split('');
  if (array.filter(x => x == 'x').length === array.filter(o => o == 'o').length){
    return true
  }else return false
}




