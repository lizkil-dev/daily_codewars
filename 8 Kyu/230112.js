function removeExclamationMarks(s) {
  let array = s.split('')
  let result = array.pop()
  return array.join('');
}