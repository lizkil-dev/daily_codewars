

let roll = 0
let roll_array = []
let countdice = 1
let sum = 0
let tries = 0

do {  
  for(let countdice = 1; countdice <= 6; countdice++) {
    roll = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    roll_array.push(roll)
  }

  tries++
  sum = roll_array.reduce((a, b) => a + b, 0)
  console.log(roll_array.toString() + ' = ' + sum);
  roll_array.length = 0
}while(sum < 24)


console.log(`Versuche: ${tries}`);




