/* Remove consecutive duplicate words
DESCRIPTION:
Your task is to remove all consecutive duplicate words from a string)//, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string removeConsecutiveDuplicates(0 words) is a valid input.
*/ 

function removeConsecutiveDuplicates(string) {
  let arr = string.split(' ')
  console.log(arr);
  console.log(arr.filter((el, i, a) => el != a[i-1]));
}

removeConsecutiveDuplicates ("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta") // "alpha beta gamma delta alpha beta gamma delta"
removeConsecutiveDuplicates("alpha alpha alpha alpha")//, "alpha");
removeConsecutiveDuplicates("alpha beta alpha")//, "alpha beta alpha");
removeConsecutiveDuplicates("alpha alphabeta alphagamma")//, "alpha alphabeta alphagamma");
