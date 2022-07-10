function DNAStrand(dna){
  let array = dna.split('')

  let complement = []

  array.forEach(element => {
    if(element == 'A'){
      complement.push('T')
    }else if(element == 'T'){
      complement.push('A')
    }else if(element == 'G'){
      complement.push('C')
    }else if(element == 'C'){
      complement.push('G')
    }    
  });
  console.log(complement.join(''));
}

DNAStrand("ATTGC")