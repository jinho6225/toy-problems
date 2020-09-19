/*
Pairs with Specific Difference
Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.
Note: the order of the pairs in the output array should maintain the order of the y element in the original array.

Examples:
input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]
input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []
Constraints:
[time limit] 5000ms
[input] array.integer arr
0 ≤ arr.length ≤ 100
[input]integer k
k ≥ 0
[output] array.array.integer
*/

function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  let array = [];
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] - k;
    if (hash.hasOwnProperty(diff)) {
      if (diff === arr[0]) {
        array.unshift([arr[i], arr[hash[diff]]]);
      } else {
        array.push([arr[i], arr[hash[diff]]]);
      }
    }
  }
  return array;
}
let arr = [0, -1, -2, 2, 1],
  k = 1;
console.log(findPairsWithGivenDifference(arr, k));

//readable solution added
function findPairsWithGivenDifference(arr, k) {
    // your code goes here
    if (k === 0) {
      return []
    }
    let array = []
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
      hash[arr[i] - k] = arr[i]
      console.log(hash)
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in hash) {
        array.push([hash[arr[i]], arr[i]])
      }
    }
    return array
  }
  let arr = [0, -1, -2, 2, 1], k = 1
  console.log(findPairsWithGivenDifference(arr, k))
  //Jin-ho
  
  
  /*
  x - y = k
  x - k = y
  key = value
  
  */