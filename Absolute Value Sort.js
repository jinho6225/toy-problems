function absSort(arr) {
	let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log(arr[i])
       let key = arr[i] * -1
      if (key in map) {
        map[key] += 1
      } else {
        map[key] = 1
      }
    }
  }  
  arr.sort((a,b) => Math.abs(a) - Math.abs(b))
  arr = arr.map(el => Math.abs(el))
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) {
      let key = arr[i]
      arr[i] = arr[i] * (-1)
      if (map[key] > 1) {
        map[key] -= 1
      } else if (map[key] === 1) {
        delete map[key]  
      }
    }
  }
  return arr
}

let arr = [2, -7, -2, -2, 0]
console.log(absSort(arr))

/*
Time: O(N log n)
Space: O(n)

input : array of int
output: same number, then i need to return negative first and then positive

first, i need to sort it with absolute value usgin Math.abs

define map {}
iterate the arr
if element is negative
check if my map has property
  if yes, 
    i am going to increment value by 1
  if no,
    i am going to assign positive element as a property and value is 1

i will sort my array usgin sort method (n log n)
using the Math.abs

iterate sorted array
if map has property with element of array
multiply -1 to the element

i need to decrement by 1 from my map property
if value is 1 from my map
  then, delete property
if not,
  just subtract by 1




examples
input:  arr = [2, -7, -2, -2, 0]
output: [0, -2, -2, 2, -7]

*/


//Ray
//Jin-ho
