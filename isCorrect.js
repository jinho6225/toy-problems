function isCorrect(arr) {
	for (let i = 0; i < arr.length; i++) {
		let result = []
		for (let j = 1; j < arr[i].length; j++) {
			result.push(arr[i][j] - arr[i][j-1])
		}
		for (let j = 0; j < result.length-1; j++) {
			if (result[j] !== result[j+1]) {
				return false
			}
		}
	}
	let obj = {}
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (!obj[j]) {
				obj[j] = []
				obj[j].push(arr[i][j] - arr[i-1][j])
			} else {
				obj[j].push(arr[i][j] - arr[i-1][j])
			}
		}
	}
	for (let key in obj) {
		for (let j = 0; j < obj[key].length-1; j++) {
			if (obj[key][j] !== obj[key][j+1]) {
				return false
			}
		}
	}
	return true;
}

const basicSolved = [
  [23, 28, 33], //5
  [19, 18, 17], //-1
  [15, 8, 1] //-7
]; //true

const basicIncorrect = [
  [23, 28, 33],
  [19, 18, 17],
  [16, 8, 1]
]; //false
const basicIncorrect1 = [
  [55, 65, 75],
  [42, 56, 70],
  [29, 47, 65]
]; //true
console.log(isCorrect(basicIncorrect1))
console.log(isCorrect(basicSolved))
console.log(isCorrect(basicIncorrect))