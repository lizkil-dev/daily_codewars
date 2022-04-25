/* Transportation on vacation
   After a hard quarter in the office you decide to get some rest on a vacation.
   So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
   You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
   Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
   Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
   
   Write a code that gives out the total amount for different days(d).*/

//My Solution//

let rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));



/* Difference of Volumes of Cuboids: 
   In this simple exercise, you will create a program that will take two lists of integers, a and b. 
   Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
   You must find the difference of the cuboids' volumes regardless of which is bigger.
   For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20.
   Therefore, the function should return 8. Your function will be tested with pre-made examples as well as random ones.*/

//My Solution//
function findDifference(cubOne, cubTwo) {
   let volumeOne = cubOne.reduce((a,b) => a*b, 1)
   let volumeTwo = cubTwo.reduce((a,b) => a*b, 1)
   
   if(volumeOne > volumeTwo){
     return volumeOne - volumeTwo
  }else {
    return volumeTwo - volumeOne
  }
}
