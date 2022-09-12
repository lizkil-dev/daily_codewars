/* Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
] */


/* 
Parameters: a positive integer
Returns: An array with strings. Each string contains a *-symbol. The number of strings depends on the parameter-number. 1st string contains one *, every other string contains the element of the previous string + 2
Pseudocode: 
*/

function towerBuilder(nFloors) {
  let floorarray = [];
  for(let i = 1; floorarray.length < nFloors; i += 2)
  {
    floorarray.push(i)
  }

  let lastnum = floorarray[floorarray.length-1];

  let symbol = "*";
  let array1 = [];

  floorarray.map((el) => array1.push(symbol.repeat(el)))
  let array2 = array1.map((el) => Array.from(el))

  if(nFloors > 1){
    array2.map((el) => {
      for(let i = 0; el.length < lastnum; i++){
        el.unshift(' ');
        el.push(' ');
      }
    })
  }

  return array2.map((el) => el.join('')); 
}

