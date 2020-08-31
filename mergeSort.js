const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//O(n^2)
function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  let mid = Math.floor(array.length / 2)

  let left = array.slice(0, mid)
  let right = array.slice(mid)

  // Split Array in into right and left

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
	let list = []
	while (left.length > 0 || right.length > 0) {
		if (left[0] === undefined) {
			list.push(right.shift())
		} else if (right[0] === undefined) {
 			list.push(left.shift())
		}else if (left[0] > right[0]) {
			list.push(right.shift())
		} else {
			list.push(left.shift())
		}
	}
	return list
}


const answer = mergeSort(numbers);
console.log(answer);



//O(n log n)
function mergeSort (array) {
	if (array.length === 1) {
	  return array
	}
	let mid = Math.floor(array.length / 2)
  
	let left = array.slice(0, mid)
	let right = array.slice(mid)
  
	// Split Array in into right and left
  
	return merge(
	  mergeSort(left),
	  mergeSort(right)
	)
  }
  
  function merge(left, right){
	  let list = []
	  let leftIdx = 0
	  let rightIdx = 0
	  while (left.length > leftIdx || right.length > rightIdx) {
		  if (left[leftIdx] === undefined) {
			  list.push(right[rightIdx])
			  rightIdx++
		  } else if (right[rightIdx] === undefined) {
			   list.push(left[leftIdx])
			  leftIdx++
		  }else if (left[leftIdx] > right[rightIdx]) {
			  list.push(right[rightIdx])
			  rightIdx++
		  } else {
			  list.push(left[leftIdx])
			  leftIdx++
		  }
	  }
	  return list
  }