/*
Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.
Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:
input:  arr = ['x','y','z'], str = "xyyzyzyx"
output: "zyx"
Constraints:
[time limit] 5000ms
[input] array.character arr
1 ≤ arr.length ≤ 30
[input] string str
1 ≤ str.length ≤ 500
[output] string
*/

function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  let min = Infinity;
  let smallChar = null;
  let flag = true;
  for (let i = 0; i < str.length; i++) {
    let newString = str.substring(i);
    for (let j = 0; j < arr.length; j++) {
      if (newString.indexOf(arr[j]) < 0) {
        flag = false;
      }
    }
    if (flag && newString.length < min) {
      min = newString.length;
      smallChar = newString;
    }
  }
  if (smallChar === null) return "";

  let flag2 = true;
  let min2 = Infinity;
  let smallChar2 = null;
  for (let i = smallChar.length; i >= 0; i--) {
    let newString2 = smallChar.substring(0, i);
    for (let j = 0; j < arr.length; j++) {
      if (newString2.indexOf(arr[j]) < 0) {
        flag2 = false;
      }
    }
    if (flag2 && newString2.length < min2) {
      min2 = newString2.length;
      smallChar2 = newString2;
    }
  }

  if (smallChar2 === null) return "";
  return smallChar2;
}

console.log(getShortestUniqueSubstring(["A", "B", "C"], "ADOBECODEBANCDDD"));
