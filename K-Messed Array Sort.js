/*
K-Messed Array Sort
Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.
Analyze the time and space complexities of your solution.

Example:
input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Constraints:

[time limit] 5000ms
[input] array.integer arr
1 ≤ arr.length ≤ 100
[input] integer k
0 ≤ k ≤ 20
[output] array.integer
*/

function sortKMessedArray(arr, k) {
// your code goes here

    let z = null
    let bool = null
    if (arr.includes(0)) {
    bool = true;
        let idx = arr.indexOf(0)
        z = arr.splice(idx,1)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]-1 === i) {
            continue;
        } else {
            let j = i
            while (j <= i+k) {
                if (arr[j]-1 === i) {
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
                j++
            }
        }
    }
    if (bool) {
        arr.unshift(z[0])  
    }
    return arr
}
    

function sortKMessedArray(arr, k) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {
        let x = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > x) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = x;
    }
    return arr;
}


//alternative
function sortKMessedArray(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        }
    }
    return arr
}
  
