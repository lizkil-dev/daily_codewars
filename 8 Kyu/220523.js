 /* Is he gonna survive? 
  A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons!
  each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
  Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
  Return True if yes, False otherwise :) */

//My Solution

function hero(bullets, dragons){
 return bullets/2 >= dragons ? true : false
}

/* Cat years, Dog years
I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that  */


//My Solution
var humanYearsCatYearsDogYears = function(humanYears) {
  
  if(humanYears == 1){
    return [humanYears, 15, 15]
  }else if(humanYears == 2){
    return [humanYears, 24, 24]
  }else {
  return [humanYears, 24 + ((humanYears - 2) * 4),24 + ((humanYears - 2) * 5)];
  }
}
