/*
Shifted Array Search
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.
Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.
Explain your solution and analyze its time and space complexities.

Example:
input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left
output: 3 # since it’s the index of 2 in arr
Constraints:
[time limit] 5000ms
[input] array.integer arr
[input] integer num
[output] integer
*/

function shiftedArrSearch(shiftArr, num) {
    // your code goes here
    let pivot = findPivot(shiftArr)
    if (pivot === 0 || num < shiftArr[0]) {
      return binarySearch(shiftArr, pivot, shiftArr.length-1, num)
    }
    return binarySearch(shiftArr, 0, pivot, num)
  
    function findPivot(arr) {
      let start = 0;
      let last = arr.length-1
      let idx = null
      while (start <= last) {  
          let mid = start + Math.floor((last - start)/2)
        if (mid == 0 || arr[mid] < arr[mid-1]) {
              return mid
        }
        if (arr[mid] > arr[0]) {
          start = mid+ 1
        } else {
          last = mid - 1
        }
      }
      return 0
    }
    
    function binarySearch(arr, start, last, num) {
      while (start <= last) {
          let mid = start + Math.floor((last - start)/2)
          if (arr[mid] < num) {
              start = mid + 1
          } else if (arr[mid] == num) {
              return mid
          } else {
              last = mid - 1
          }
      } 
      return -1
    }
    
    
  }
  console.log(shiftedArrSearch([1,2,3,4,5,0], 0))