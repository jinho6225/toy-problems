function mergeSortedArrays(arr1, arr2) {
    
    let result = [], po1=0, po2=0
    if (!arr1.length && !arr2.length) return result
    if (!arr1.length) return arr2
    if (!arr2.length) return arr1  
    
    while (po1 < arr1.length && po2 < arr2.length) {
        if (arr1[po1] < arr2[po2]) {
            result.push(arr1[po1])
            po1++
        } else {
            result.push(arr2[po2])
            po2++
        }
    }

    if (po1 < po2) {
        while (po1 < arr1.length) {
            result.push(arr1[po1])
            po1++
        }
    } else {
        while (po2 < arr2.length) {
            result.push(arr2[po2])
            po2++
        }
    }
    return result
}

// O(n) time complexity
// O(n) space complexity

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));