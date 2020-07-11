/*
Perform String Shifts
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
direction can be 0 (for left shift) or 1 (for right shift).
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

Example 1:
Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation:
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
Example 2:
Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

Constraints:
1 <= s.length <= 100
s only contains lower case English letters.
1 <= shift.length <= 100
shift[i].length == 2
0 <= shift[i][0] <= 1
0 <= shift[i][1] <= 100
*/
/*
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  if (s.length === 0 || s.length > 100) {
    return false;
  } else if (shift.length === 0 || shift.length > 100) {
    return false;
  }
  const stringArr = s.split('');
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === stringArr[i].toUpperCase()) {
      return false;
    }
  }
  let rightCount = 0;
  let leftCount = 0;
  for (let i = 0; i < shift.length; i++) {
    if (shift[i][0] < 0 || shift[i][0] > 1) {
      return false;
    } else if (shift[i][1] < 0 || shift[i][1] > 100) {
      return false;
    }
    if (shift[i][0] === 0) {
      leftCount += shift[i][1];
    } else if (shift[i][0] === 1) {
      rightCount += shift[i][1];
    }
  }
  if (rightCount > leftCount) {
    for (let i = 0; i < rightCount - leftCount; i++) {
      const popped = stringArr.pop();
      stringArr.unshift(popped);
    }
  } else if (rightCount < leftCount) {
    for (let i = 0; i < leftCount - rightCount; i++) {
      const shifted = stringArr.shift();
      stringArr.push(shifted);
    }
  } else {
    return s;
  }
  return stringArr.join('');
};

var s = 'abcdefg';
var shift = [
  [1, 1],
  [1, 1],
  [0, 2],
  [1, 3],
];
stringShift(s, shift);
