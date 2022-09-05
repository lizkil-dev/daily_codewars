var isAnagram = function(test, original) {
  
  let a = test.toLowerCase().split('').sort().join('');
  let b = original.toLowerCase().split('').sort().join('');

  return a == b ? true : false
  
};


