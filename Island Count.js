/*
Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.
An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).
Explain and code the most efficient solution possible and analyze its time and space complexities.

Example:
input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]
output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.
alt

Constraints:
[time limit] 5000ms
[input] array.array.int binaryMatrix
1 ≤ binaryMatrix.length ≤ 100
1 ≤ binaryMatrix[i].length ≤ 100
[output] integer
*/

function getNumberOfIslands(binaryMatrix) {
    // your code goes here
    let count = 0;
    for (let i = 0; i < binaryMatrix.length; i++) {
      for (let j = 0; j < binaryMatrix[i].length; j++) {
        if (binaryMatrix[i][j] === 1) {
          console.log(binaryMatrix, i, j)
          helper(binaryMatrix, i, j)
          count++  
        }
        
      }
    }
    function helper(arr, i, j) {    
      if (i < 0 || j < 0 || i > arr.length-1 || j > arr[i].length-1) return
      arr[i][j] = 0
      if (i !== 0 && arr[i-1][j] !== undefined && arr[i-1][j] === 1) {
        helper(arr,i-1, j)
      } 
      if (i !== arr.length-1 && arr[i+1][j] !== undefined && arr[i+1][j] === 1) {
        helper(arr,i+1, j)
      } 
      if (j !== 0 && arr[i][j-1] !== undefined && arr[i][j-1] === 1) {
        helper(arr,i,j-1)
      } 
      if (j !== arr[i].length-1 && arr[i][j+1] !== undefined && arr[i][j+1] === 1) {
        helper(arr,i,j+1)      
      }
      return
    }
    return count
  }
  
  let binaryMatrix = [ [0,    1,    0,    1,    0],
                       [0,    0,    1,    1,    1],
                       [1,    0,    0,    1,    0],
                       [0,    1,    1,    0,    0],
                       [1,    0,    1,    0,    1] ]
  console.log(getNumberOfIslands(binaryMatrix))
  //Jin-ho
  
  
  
  
  