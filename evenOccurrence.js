/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
	let map = {}
	let fast = Infinity
		for (let i = 0; i < arr.length; i++) {
			if (map.hasOwnProperty(arr[i]) === false) {
				map[arr[i]] = 1			
			} else {
				map[arr[i]] += 1
		}
	}
	for (let key in map) {
		if (map[key] === 2) {
			let idx = arr.indexOf(Number(key))
			console.log(idx)
			if (idx < fast) fast = arr[idx]
		}
	}
	if (fast === Infinity) return null
	return fast
};

/*
hash = {}
iterate entire arr and check if there is property for each element

if no
	element will be key, value is count and index as object
if yes
	count will be added by 1

set fast variable = null
iterate hash and checking there are value is 2
	if value is 2, 
		if (index < fast variable)
			then assign index into fast variable
	if no
		return null
*/

var onlyEven = evenOccurrence([1, 7, 2, 5, 8, 9, 6, 4]);
console.log(onlyEven);


//another solution
var evenOccurrence = function(arr) {
  // Your code here.
	let map = {}
	let fast = Infinity
		for (let i = 0; i < arr.length; i++) {
			if (map.hasOwnProperty(arr[i]) === false) {
				map[arr[i]] = 1			
			} else {
				map[arr[i]] += 1
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]] === 2) {
			return arr[i]
		}
	}
	return null
};