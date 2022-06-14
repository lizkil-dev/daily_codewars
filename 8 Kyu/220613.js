function XO(str) {
  console.log(str.split(''));
  let xLetters = []
  let oLetters = []
  str.forEach(element => { 
    element.toLowerCase() == "x" ? xLetters.push : element.toLowerCase() == "o" ? oLetters.push : undefined    
  });
}
console.log(xLetters)
console.log(oLetters);;
XO("xxOo")
XO("xxxm")