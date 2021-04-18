const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function quickSort(array, left, right){
	let pivot = null, partitionIdx = null

	if (left < right) {
		pivot = right
		partitionIdx = partition(array, pivot, left, right)

		quickSort(array, left, partitionIdx-1)
		quickSort(array, partitionIdx+1, right)
	}

	return array
}

function partition(array, pivot, left, right){
	let pivotVal = array[pivot]
	let partitionIdx = left

	for (let i = left; i < right; i++) {
		if (array[i] < pivotVal) {
			swap(array, i, partitionIdx)
			partitionIdx++
		}
	}
	swap(array, partitionIdx, right)
	return partitionIdx
}

function swap(array, first, second) {
	let temp = array[first]
	array[first] = array[second]
	array[second] = temp
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);