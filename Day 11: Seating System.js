/*
Your plane lands with plenty of time to spare. The final leg of your journey is a ferry that goes directly to the tropical island where you can finally start your vacation. As you reach the waiting area to board the ferry, you realize you're so early, nobody else has even arrived yet!

By modeling the process people use to choose (or abandon) their seat in the waiting area, you're pretty sure you can predict the best place to sit. You make a quick map of the seat layout (your puzzle input).

The seat layout fits neatly on a grid. Each position is either floor (.), an empty seat (L), or an occupied seat (#). For example, the initial seat layout might look like this:

L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL
Now, you just need to model the people who will be arriving shortly. Fortunately, people are entirely predictable and always follow a simple set of rules. All decisions are based on the number of occupied seats adjacent to a given seat (one of the eight positions immediately up, down, left, right, or diagonal from the seat). The following rules are applied to every seat simultaneously:

If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
Otherwise, the seat's state does not change.
Floor (.) never changes; seats don't move, and nobody sits on the floor.

After one round of these rules, every seat in the example layout becomes occupied:

#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##
After a second round, the seats with four or more occupied adjacent seats become empty again:

#.LL.L#.##
#LLLLLL.L#
L.L.L..L..
#LLL.LL.L#
#.LL.LL.LL
#.LLLL#.##
..L.L.....
#LLLLLLLL#
#.LLLLLL.L
#.#LLLL.##
This process continues for three more rounds:

#.##.L#.##
#L###LL.L#
L.#.#..#..
#L##.##.L#
#.##.LL.LL
#.###L#.##
..#.#.....
#L######L#
#.LL###L.L
#.#L###.##
#.#L.L#.##
#LLL#LL.L#
L.L.L..#..
#LLL.##.L#
#.LL.LL.LL
#.LL#L#.##
..L.L.....
#L#LLLL#L#
#.LLLLLL.L
#.#L#L#.##
#.#L.L#.##
#LLL#LL.L#
L.#.L..#..
#L##.##.L#
#.#L.LL.LL
#.#L#L#.##
..L.L.....
#L#L##L#L#
#.LLLLLL.L
#.#L#L#.##
At this point, something interesting happens: the chaos stabilizes and further applications of these rules cause no seats to change state! Once people stop moving around, you count 37 occupied seats.

Simulate your seating area by applying the seating rules repeatedly until no seats change state. How many seats end up occupied?
*/

//part 1

let aa = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

let array = aa.split('\n')

function emptyhelper(arr, i, j) {
	let empty = true
	if (i !== 0 && j !== 0 && arr[i-1][j-1] === '#') {
		empty = false
	} 
	if (i !== 0 && arr[i-1][j] === '#') {
		empty = false
	} 
	if (i !== 0 && j !== arr[i].length-1 && arr[i-1][j+1] === '#') {
		empty = false
	} 
	if (j !== 0 && arr[i][j-1] === '#') {
		empty = false
	} 
	if (j !== arr[i].length-1 && arr[i][j+1] === '#') {
		empty = false
	} 
	if (i !== arr.length-1 && j !== 0 && arr[i+1][j-1] === '#') {
		empty = false
	} 
	if (i !== arr.length-1 && arr[i+1][j] === '#') {
		empty = false
	} 
	if (i !== arr.length-1 && j !== arr[i].length-1 && arr[i+1][j+1] === '#') {
		empty = false
	}
	if (empty) {
		return '#'
	} else {
		return 'L'
	}
}


function occupiedhelper(arr, i, j) {
	let occupied = 0
	if (i !== 0 && j !== 0 && arr[i-1][j-1] === '#') {
		occupied++
	} 
	if (i !== 0 && arr[i-1][j] === '#') {
		occupied++
	} 
	if (i !== 0 && j !== arr[i].length-1 && arr[i-1][j+1] === '#') {
		occupied++
	} 
	if (j !== 0 && arr[i][j-1] === '#') {
		occupied++
	} 
	if (j !== arr[i].length-1 && arr[i][j+1] === '#') {
		occupied++
	} 
	if (i !== arr.length-1 && j !== 0 && arr[i+1][j-1] === '#') {
		occupied++
	} 
	if (i !== arr.length-1 && arr[i+1][j] === '#') {
		occupied++
	} 
	if (i !== arr.length-1 && j !== arr[i].length-1 && arr[i+1][j+1] === '#') {
		occupied++
	}
	if (occupied >= 4) {
		return 'L'
	} else {
		return '#'
	}
}

function checkSeat(arr) {
	while (true) {
		let prev = arr.join(',')
		let newArr = arr.map(el => el.split(''))
		let copied = JSON.parse(JSON.stringify(newArr))
		for (let i = 0; i < newArr.length; i++) {
			for (let j = 0; j < newArr[i].length; j++) {
				if (arr[i][j] === 'L') {
					copied[i][j] = emptyhelper(newArr, i, j)
				} else if (arr[i][j] === '#') {
					copied[i][j] = occupiedhelper(newArr, i, j)
				}
			}
		}
		arr = copied.map(el => el.join(''))
		let cur = arr.join(',')
		if (prev === cur) {
			console.log('wow!!')
			break;
		}
	}
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '#') count++
		}
	}
	return count
}
checkSeat(array)


//part 2

let aa = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

let array = aa.split('\n')

function emptyhelper(arr, i, j) {
	let x = 0
	let y = 0
	let height = arr.length-1;
	let width = arr[i].length-1;
	let zeroX = 0
	let zeroY = 0
	let empty = true

	while(i+y > zeroY && j+x > zeroX) {
		x--
		y--	
		if (i !== 0 && j !== 0 && arr[i+y][j+x] === '#') {
            empty = false
			break;
		} else if (arr[i+y][j+x] === 'L') {
			break;
		}

	}

	x = 0
	y = 0
	while(i+y > zeroY) {
		y--	
		if (i !== 0 && arr[i+y][j] === '#') {
            empty = false
			break;
		} else if (arr[i+y][j] === 'L') {
			break;
		}


	}
	x = 0
	y = 0
	while(i+y > zeroY && j+x < width) {
		x++
		y--		
		if (i !== 0 &&  j !== arr[i].length-1 && arr[i+y][j+x] === '#') {
            empty = false
			break;
		} else if (arr[i+y][j+x] === 'L') {
			break;
		}	

	}
	x = 0
	y = 0
	while(j+x > zeroX) {
		x--		
		if (j !== 0 && arr[i][j+x] === '#') {
            empty = false
			break;
		} else if (arr[i][j+x] === 'L') {
			break;
		}		

	}

	x = 0
	y = 0
	while(j+x < width) {
		x++	
		if (j !== arr[i].length-1 && arr[i][j+x] === '#') {
            empty = false
			break;
		} else if (arr[i][j+x] === 'L') {
			break;
		}		
	}
	x = 0
	y = 0
	while(i+y < height &&  j+x > zeroX) {
		y++
		x--	
		if (i !== arr.length-1 && j !== 0 && arr[i+y][j+x] === '#') {
            empty = false
			break;
		} else if (arr[i+y][j+x] === 'L') {
			break;
		}		

	}
	x = 0
	y = 0
	while(i+y < height) {
	    y++	
		if (i !== arr.length-1 && arr[i+y][j] === '#') {
            empty = false
			break;
		} else if (arr[i+y][j] === 'L') {
			break;
		}		
	}
	x = 0
	y = 0
	while(i+y < height && j+x < width) {
		x++
		y++	
		if (i !== arr.length-1 && j !== arr[i].length-1 && arr[i+y][j+x] === '#') {
            empty = false
			break;
		} else if (arr[i+y][j+x] === 'L') {
			break;
		}		
	}

	if (empty) {
		return '#'
	} else {
		return 'L'
	}
}


function occupiedhelper(arr, i, j) {
	let x = 0
	let y = 0
	let height = arr.length-1;
	let width = arr[i].length-1;
	let zeroX = 0
	let zeroY = 0
    let occupied = 0
	
	console.log(height, width)

	while(i+y > zeroY && j+x > zeroX) {
		x--
		y--	
		if (i !== 0 && j !== 0 && arr[i+y][j+x] === '#') {
			occupied++
			break;
		} else if (arr[i+y][j+x] === 'L') {
			break;
		}

	}

	x = 0
	y = 0
	while(i+y > zeroY) {
		y--	
		if (i !== 0 && arr[i+y][j] === '#') {
			occupied++
			break;
		} else if (arr[i+y][j] === 'L') {
			break;
		}	


	}
	x = 0
	y = 0
	while(i+y > zeroY && j+x < width) {
		x++
		y--		
		if (i !== 0 &&  j !== arr[i].length-1 && arr[i+y][j+x] === '#') {
			occupied++
			break;
		} else if (arr[i+y][j+x] === 'L') {
			break;
		}	

	}
	x = 0
	y = 0
	while(j+x > zeroX) {
		x--		
		if (j !== 0 && arr[i][j+x] === '#') {
			occupied++
			break;
		} else if (arr[i][j+x] === 'L') {
			break;
		}	

	}

	x = 0
	y = 0
	while(j+x < width) {
		x++	
		if (j !== arr[i].length-1 && arr[i][j+x] === '#') {
			occupied++
			break;
		} else if (arr[i][j+x] === 'L') {
			break;
		}	
	}
	x = 0
	y = 0
	while(i+y < height &&  j+x > zeroX) {
		y++
		x--	
		if (i !== arr.length-1 && j !== 0 && arr[i+y][j+x] === '#') {
			occupied++
			break;
		} else if (arr[i+y][j+x] === 'L') {
			break;
		}	

	}
	x = 0
	y = 0
	while(i+y < height) {
	    y++	
		if (i !== arr.length-1 && arr[i+y][j] === '#') {
			occupied++
			break;
		} else if (arr[i+y][j] === 'L') {
			break;
		}	
	}
	x = 0
	y = 0
	while(i+y < height && j+x < width) {
		x++
		y++	
		if (i !== arr.length-1 && j !== arr[i].length-1 && arr[i+y][j+x] === '#') {
			occupied++
			break;
		} else if (arr[i+y][j+x] === 'L') {
			break;
		}	
	}

	if (occupied >= 5) {
		return 'L'
	} else {
		return '#'
	}

}

function checkSeat(arr) {
	while(true) {
		let prev = arr.join(',')
		let newArr = arr.map(el => el.split(''))
		let copied = JSON.parse(JSON.stringify(newArr))
		for (let i = 0; i < newArr.length; i++) {
			for (let j = 0; j < newArr[i].length; j++) {
				if (arr[i][j] === 'L') {
					copied[i][j] = emptyhelper(newArr, i, j)
				} else if (arr[i][j] === '#') {
					copied[i][j] = occupiedhelper(newArr, i, j)
				}
			}
		}
		arr = copied.map(el => el.join(''))
        let cur = arr.join(',')
		if (prev === cur) {
			console.log('wow!!')
			break;
		}
	}
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '#') count++
		}
	}
	return count
}
checkSeat(array)

