/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  if (string.length === 1) return [string]
  if (string.length === 2) {
    let array = []
    array.push(string)
    array.push(string[1] + string[0])
    return array
  }
  if (string.length > 2) {
    let array = []
    for (let i = 0; i < string.length; i++) {
      let newString = string.substring(0,i) + string.substring(i+1)
      let arr = allAnagrams(newString)
      for (let j = 0; j < arr.length; j++) {
        let a = string[i] + arr[j]
        array.push(a)
      }
    }
    return array
  }  
};

/*
string length === 1
return [string]
string length === 2
return [string, string[1]+string[0]]
string length === 3
  []
  iterate the string "abc"
  a, bc // b, ac //, c, ab
  return [bc, cb] = recurstion(bc / ac / ab)
    iteratate [bc, cb]
    concat with a + bc / a + cb
    push result into empty []
  
*/