/*
Array Quadruplet
Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.
Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).
Explain and code the most efficient solution possible, and analyze its time and space complexities.

Example:
input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)
Constraints:
[time limit] 5000ms
[input] array.integer arr
1 ≤ arr.length ≤ 100
[input] integer s
[output] array.integer
*/
//O(n^3)
function findArrayQuadruplet(arr, s) {
    // your code goes here
    let map = new Map()
    arr.sort((a,b) => a-b)
    let sum = 0
    for (let i = 0 ; i < arr.length; i++) {
        sum += arr[i]
        if (!map.has(arr[i])) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    let result = [] 
    if (!arr.length || arr.length < 4 || sum < s) return result
    if (sum === s) return arr
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            for (let k = j+1; k < arr.length; k++) {
                let totalOfThree = arr[i]+arr[j]+arr[k]
                map.set(arr[i], map.get(arr[i])-1)
                map.set(arr[j], map.get(arr[j])-1)
                map.set(arr[k], map.get(arr[k])-1)
                let diff = s - totalOfThree // 9
                if (map.get(diff) > 0 && map.has(diff)) {
                    result.push([arr[i],arr[j],arr[k],diff])
                    map.set(arr[i], map.get(arr[i])+1)
                    map.set(arr[j], map.get(arr[j])+1)
                    map.set(arr[k], map.get(arr[k])+1)
                    break;
                }
                map.set(arr[i], map.get(arr[i])+1)
                map.set(arr[j], map.get(arr[j])+1)
                map.set(arr[k], map.get(arr[k])+1)
            }
        } 
    }
    if (!result.length) {
        return result
    }
    return result[0]
}

console.log(findArrayQuadruplet([4,4,4,4,5], 16))


//O(n^4) =< O(n^3)
function findArrayQuadruplet(arr, s) {
    // your code goes here
    let result = []
    arr.sort((a,b) => a-b)
    //[0,1,2,3,4,5,7,9]
    if (!arr.length) return result
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            for (let k = j+1; k < arr.length; k++) {
                for (let l = k+1; l < arr.length; l++) {
                    if (s === (arr[i] + arr[j] + arr[k] + arr[l])) {
                        result.push([arr[i],arr[j],arr[k],arr[l]])
                    }
                }
            }
        } 
    }
    if (!result.length) {
        return result
    }
    return result[0] 
}