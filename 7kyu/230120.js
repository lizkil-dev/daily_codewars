/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2. */

// function longest(s1, s2) {
//   let s3 = new Set([...new Set(s1.split('')), ...new Set(s2.split(''))])
//   let result = Array.from(s3);
//   console.log(result.sort().join(''));
// }

const longest = (s1, s2) => {
 let result = [...new Set(s1+s2)].sort().join();
 console.log(result);
}


longest("aretheyhere", "yestheyarehere") // "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding") //"abcdefghilnoprstu"