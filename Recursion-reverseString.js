//Implement a function that reverses a string using iteration...and then recursion!

//iterative
function reverseStringIterative(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

reverseStringIterative('mastery');
//should return: 'yretsam'

//recursive
function reverseStringRecursive(str) {
  if (str.length === 1) {
    return str;
  }
  if (str.length === 2) {
    return str[1] + str[0];
  }
  if (str.length > 2) {
    return reverseStringRecursive(str.substring(1)) + str[0];
  }
}

reverseStringRecursive('mastery');
// //should return: 'yretsam'
