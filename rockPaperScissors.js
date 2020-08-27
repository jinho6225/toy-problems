/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

var rockPaperScissors = function () {
  // TODO: your solution here
  let arr = ['R', 'S', 'P']
	if (num === 1) {
		return arr
	} else if (num === 2) {
		let list = []
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				let result = arr[i] + arr[j]
				list.push(result)
			}
		}
		return list
	} else {
		let list = []
		for (let i = 0; i < arr.length; i++) {
			let result = rockPaperScissors(num-1)
			for (let j = 0; j < result.length; j++) {
				list.push(arr[i]+result[j])
			}
		}
		return list
	}
};
