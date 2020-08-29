/*
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.

Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.

Explain the correctness of your code, and analyze its time and space complexities.

Examples:

input:  text = “(()”
output: 1

input:  text = “(())”
output: 0

input:  text = “())(”
output: 2
Constraints:

[time limit] 5000ms

[input] string text

1 ≤ text.length ≤ 5000
[output] integer
*/

function bracketMatch(text) {
    // your code goes here

    let po1 = 0;
    let po2 = 0;
    for (let i = 0; i < text.length; i++) { //“())(”
      if (text[i] === '(') {
        po2++;
      } else if (text[i] == ')') { // text[i] === ')'
          if (po2 > 0) {
            po2--;  
          } else {
            po1++    
          }
      }
    }
    return po2 + po1;
  }
    
  //alternative
  /*
    let array = [];  // 0//[]
    array.push(text[0]) // ( // ) //  text = “(())”
    for (let i = 1; i < text.length; i++) {
      if (text[i] === ')') {
        if (array[array.length-1] === '(') {
          array.pop()
        } else {
          array.push(text[i])
        }
      } else {
        array.push(text[i])
      } 
    }
    return array.length;
    // 15
  }
  */
  