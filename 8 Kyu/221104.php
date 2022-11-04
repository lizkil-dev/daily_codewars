<?php


/* Pre-FizzBuzz Workout #1
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output. */

function pre_fizz($n) {
  $arr = [];
  for($i = 1; $i <= $n; $i++){
    $arr[] = $i;
  }
  print_r($arr);
}

pre_fizz(4); // [1, 2, 3, 4], 