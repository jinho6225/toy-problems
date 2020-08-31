/*
Array Index & Element Equality
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

Examples:

input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ 100
[output] integer
*/

function indexEqualsValueSearch(arr) {
	let start = 0
	let last = arr.length - 1
	let mid = Math.floor(last / 2)

	while (start <= last) {
		if (arr[mid] === mid) {
			return mid
		} else {
			if (arr[mid] > mid) {
				last = mid - 1
				mid = Math.floor(last / 2) 
			} else {
				start = mid + 1
				mid = Math.floor(start + ((last - start) / 2))
			}
		}
	}
	return -1
}

/*
iterate this arr
and check if it is same index and value
if it's matched
  return value or index
if not
  return -1
  
  [-8,0,2,5]
  [-1,0,3,6]
  
  [-8,0,1,3,5]
  [1,3,5]

  found out first
    middle of index with value
  
    if index is greater than value
      iterate for loop from that index < -starting point of iteration
    else
      iterate for loop by that index < -ending point of iteration
  
*/