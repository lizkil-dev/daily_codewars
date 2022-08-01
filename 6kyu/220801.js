function duplicateCount(text){
  let lowerCase = text.toLowerCase()
  let duplicates = []
  for(let i = 0; i < lowerCase.length; i++){
    for(let j = i+1; j < lowerCase.length; j++){
      if(lowerCase[i] == lowerCase[j]){
        duplicates.push(lowerCase[j])
      }
    }
  }

  let result = [...new Set(duplicates)]
  return result.length
}

