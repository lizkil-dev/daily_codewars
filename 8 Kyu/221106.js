/* DESCRIPTION:
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0 */

function strCount($str, $letter) {
  return substr_count($str, $letter);
}


/* SUPER DUPER EASY
DESCRIPTION:
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error". */


function problem($x){
  return is_numeric($x) ? $x * 60 + 5 : "Error"
}


