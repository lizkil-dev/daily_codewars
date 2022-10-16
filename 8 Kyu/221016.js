/* A needle in the haystack 
DESCRIPTION:
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" */

function findNeedle(haystack) {
  let index = haystack.indexOf('needle');
  return index >= 0 ? `found the needle at position ${index}` : "Your function didn't return anything";
}

