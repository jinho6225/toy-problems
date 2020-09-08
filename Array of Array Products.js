/*
Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.
Solve without using division and analyze your solution’s time and space complexities.

Examples:
input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]
input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
Constraints:
[time limit] 5000ms
[input] array.integer arr
0 ≤ arr.length ≤ 20
[output] array.integer
*/

function arrayOfArrayProducts(arr) {
    // your code goes here
      if (arr.length === 0 || arr.length === 1) return []
      let product = 1
      let result = []
      for (let i = 0; i < arr.length; i++) {
        result[i] = product
        product = product * arr[i]
      }
      product = 1
      let result1 = []
      for (let i = arr.length-1; i >= 0; i--) {
        result1[i] = product
        product = product * arr[i]
      }
      let answer = []
      for (let i = 0; i < arr.length; i++) {
        answer[i] = result[i] * result1[i]
      }
      return answer
    }
  
  console.log(arrayOfArrayProducts([8, 10, 2]))