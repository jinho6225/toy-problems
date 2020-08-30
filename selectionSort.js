const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

let calculator = 0
function selectionSort(array) {
  
  for (let i = 0; i < array.length; i++) {
	let smallestNum = i
	for (let j = i+1; j < array.length; j++) {
		calculator++
		if (array[j] < array[smallestNum]) {
			smallestNum = j
		}
	}
	let temp = array[i]
	array[i] = array[smallestNum]
	array[smallestNum] = temp
  }
  return array
}

selectionSort(numbers);
console.log(numbers)
console.log(calculator)