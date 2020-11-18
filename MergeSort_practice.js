const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    //base case
    if (array.length === 1) {
        return array
    }

    let mid = Math.floor(array.length/2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    //recursive case
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let po1=0, po2=0, list = []
    while (po1 < left.length || po2 < right.length)
        if (left[po1] === undefined) {
            list.push(right[po2])
            po2++
        } else if (right[po2] === undefined) {
            list.push(left[po1])
            po1++
        } else if (left[po1] > right[po2]) {
            list.push(right[po2])
            po2++
        } else {
            list.push(left[po1])
            po1++
        }
    return list
}

const answer = mergeSort(numbers);
console.log(answer);