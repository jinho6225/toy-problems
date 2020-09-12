/*
Move Zeros To End
Given a static-sized array of integers arr, move all zeroes in the array to the end of the array. You should preserve the relative order of items in the array.

We should implement a solution that is more efficient than a naive brute force.

Examples:

input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]
Constraints:

[time limit] 5000ms
[input] array.integer arr
0 ≤ arr.length ≤ 20
[output] array.integer
*/
function moveZerosToEnd(arr) {
	/*
	@param arr: integer[]
	@return: integer[]
	*/
  let po1 = 0
  let i = 0
  while (i < arr.length) {
    if (arr[i] !== 0) {
      [arr[po1], arr[i]] = [arr[i], arr[po1]]
      po1++
    }
    i++
  }
  return arr
}

