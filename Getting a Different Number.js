/*
Getting a Different Number
Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.
Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.
Your algorithm should be efficient, both from a time and a space complexity perspectives.
Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.
Analyze the time and space complexities of your algorithm.

Example:
input:  arr = [0, 1, 2, 3]
output: 4 
Constraints:
[time limit] 5000ms
[input] array.integer arr
1 ≤ arr.length ≤ MAX_INT
0 ≤ arr[i] ≤ MAX_INT for every i, 0 ≤ i < MAX_INT
[output] integer
*/

function getDifferentNumber(arr) {
    // your code goes here
    if (!arr.length) return 0
    arr.sort((a,b) => a-b)
    console.log(arr)
    if (arr[0] === 0) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i-1] === 1) {
          continue
        } else {
          return arr[i-1] + 1
        }    
      }
      let maxInt = Math.pow(2,31) - 1
      if ((arr[arr.length-1] + 1) < maxInt) {
        return arr[arr.length-1] + 1  
      }
    } else {
      return 0
    }
  }
  
  let arr = [1,3,0,2]
  console.log(getDifferentNumber(arr))
  console.log(Math.pow(2, 31) - 1)
  //Jin-ho
  //Rutu
  /*
  input:  arr = [1, 2, 3]
  output: 0 
  input:  arr = [0,1, 2, 3]
  output: 4 
  input:  arr = [0, 1, 3, 5]
  output: 2
  
  [5, 7, 8, 3, 0]
  starting point min = 0
  
  if (!array.length) return 0
  if array has 0 if (arr.includes(0))
    
    array will be sort by ascending
    iterate sorted array from index 1
      if (arr[i] - arr[i-1] === 1) {
        continue
      } else {
        return arr[i-1] + 1
      }
  
  return array[array.length-1] + 1
    
  not
    return 0
  
  */


//another solution added

function getDifferentNumber(arr) {
    // your code goes here
    let len = arr.length
    if (!len) return 0
    arr.sort((a,b) => a-b)
    for (let i = 0; i < len; i++) {
      if (arr[i] !== i) {
        return i
      }
    }
    let maxInt = Math.pow(2,31) - 1
    if ((arr[arr.length-1] + 1) < maxInt) {
      return arr[arr.length-1] + 1  
    }
  }