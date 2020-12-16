/*
--- Day 12: Rain Risk ---
Your ferry made decent progress toward the island, but the storm came in faster than anyone expected. The ferry needs to take evasive actions!

Unfortunately, the ship's navigation computer seems to be malfunctioning; rather than giving a route directly to safety, it produced extremely circuitous instructions. When the captain uses the PA system to ask if anyone can help, you quickly volunteer.

The navigation instructions (your puzzle input) consists of a sequence of single-character actions paired with integer input values. After staring at them for a few minutes, you work out what they probably mean:

Action N means to move north by the given value.
Action S means to move south by the given value.
Action E means to move east by the given value.
Action W means to move west by the given value.
Action L means to turn left the given number of degrees.
Action R means to turn right the given number of degrees.
Action F means to move forward by the given value in the direction the ship is currently facing.
The ship starts by facing east. Only the L and R actions change the direction the ship is facing. (That is, if the ship is facing east and the next instruction is N10, the ship would move north 10 units, but would still move east if the following action were F.)

For example:

F10
N3
F7
R90
F11
These instructions would be handled as follows:

F10 would move the ship 10 units east (because the ship starts by facing east) to east 10, north 0.
N3 would move the ship 3 units north to east 10, north 3.
F7 would move the ship another 7 units east (because the ship is still facing east) to east 17, north 3.
R90 would cause the ship to turn right by 90 degrees and face south; it remains at east 17, north 3.
F11 would move the ship 11 units south to east 17, south 8.
At the end of these instructions, the ship's Manhattan distance (sum of the absolute values of its east/west position and its north/south position) from its starting position is 17 + 8 = 25.

Figure out where the navigation instructions lead. What is the Manhattan distance between that location and the ship's starting position?
*/

let a = `F10
N3
F7`
// R90
// F11`

// N 
// S 
// E 
// W 
// L 
// R 
// F 

let array = a.split('\n')

//part 1
function navicate(arr) {
	let obj = {
		'E': 0,
		'N': 0,
		'W': 0,
		'S': 0
	}
	let direction = 'E'
	for (let i = 0; i < arr.length; i++) {
		let key = arr[i][0]
		let val = arr[i].substring(1)
		if (key in obj) {
			obj[key] += Number(val)
		} else if (key === 'F') {
			obj[direction] += Number(val)
		} else if (key === 'R') {
			direction = directionFn(direction, key, val)
		} else if (key === 'L') {
			direction = directionFn(direction, key, val)
		}
	}
	let result = Math.abs(obj['E'] - obj['W']) + Math.abs(obj['N'] - obj['S'])
	return result
}

function directionFn(cur, direc, val) {
	if (cur == 'N') {
		if (direc =='R') {
			if (val == 90) {
				return 'E'
			} else if (val == 180) {
				return 'S'
			} else if (val == 270) {
				return 'W'
			}
		} else if (direc == 'L') {
			if (val == 90) {
				return 'W'
			} else if (val == 180) {
				return 'S'
			} else if (val == 270) {
				return 'E'
			}
		}
	} else if (cur == 'E') {
		if (direc =='R') {
			if (val == 90) {
				return 'S'
			} else if (val == 180) {
				return 'W'
			} else if (val == 270) {
				return 'N'
			}
		} else if (direc == 'L') {
			if (val == 90) {
				return 'N'
			} else if (val == 180) {
				return 'W'
			} else if (val == 270) {
				return 'S'				
			}			
		}
	} else if (cur == 'S') {
		if (direc =='R') {
			if (val == 90) {
				return 'W'
			} else if (val == 180) {
				return 'N'
			} else if (val == 270) {
				return 'E'
			}
		} else if (direc == 'L') {
			if (val == 90) {
				return 'E'
			} else if (val == 180) {
				return 'N'
			} else if (val == 270) {
				return 'W'
			}			
		}
	} else if (cur == 'W') {
		if (direc =='R') {
			if (val == 90) {
				return 'N'
			} else if (val == 180) {
				return 'E'
			} else if (val == 270) {
				return 'S'				
			}
		} else if (direc == 'L') {
			if (val == 90) {
				return 'S'				
			} else if (val == 180) {
				return 'E'
			} else if (val == 270) {
				return 'N'				
			}			
		}
	}
}

navicate(array)



//part 2
function navicate2(arr) {
	let obj = {
		'E': 0,
		'N': 0,
		'W': 0,
		'S': 0
	}
	let waypoint = {
		'E': 10,
		'N': 1
	}
	for (let i = 0; i < arr.length; i++) {
		let key = arr[i][0]
        let val = arr[i].substring(1)
        console.log(key, val, i, 'here')
		if (key in waypoint) {
			waypoint[key] += Number(val)
        } 
        else if (key === 'F') {
            for (let key in waypoint) {
                obj[key] += waypoint[key] * Number(val)
            } 
        } 
        else if (key === 'R') {
			waypoint = directionFn2(waypoint, key, val)
        } 
        else if (key === 'L') {
			waypoint = directionFn2(waypoint, key, val)
		} else {
            waypoint[key] = Number(val)
        }
    }
    console.log(obj)
	let result = Math.abs(obj['E'] - obj['W']) + Math.abs(obj['N'] - obj['S'])
	return result
}

function directionFn2(obj, direc, val) {
    let result = {}
    for (let key in obj) {
        if (key == 'N') {
            if (direc =='R') {
                if (val == 90) {
                    result['E'] = obj[key]
                } else if (val == 180) {
                    result['S'] = obj[key]
                } else if (val == 270) {
                    result['W'] = obj[key]
                }
            } else if (direc == 'L') {
                if (val == 90) {
                    result['W'] = obj[key]
                } else if (val == 180) {
                    result['S'] = obj[key]
                } else if (val == 270) {
                    result['E'] = obj[key]
                }
            }
        } else if (key == 'E') {
            if (direc =='R') {
                if (val == 90) {
                    result['S'] = obj[key]
                } else if (val == 180) {
                    result['W'] = obj[key]
                } else if (val == 270) {
                    result['N'] = obj[key]
                }
            } else if (direc == 'L') {
                if (val == 90) {
                    result['N'] = obj[key]
                } else if (val == 180) {
                    result['W'] = obj[key]
                } else if (val == 270) {
                    result['S'] = obj[key]				
                }			
            }
        } else if (key == 'S') {
            if (direc =='R') {
                if (val == 90) {
                    result['W'] = obj[key]
                } else if (val == 180) {
                    result['N'] = obj[key]
                } else if (val == 270) {
                    result['E'] = obj[key]
                }
            } else if (direc == 'L') {
                if (val == 90) {
                    result['E'] = obj[key]
                } else if (val == 180) {
                    result['N'] = obj[key]
                } else if (val == 270) {
                    result['W'] = obj[key]
                }			
            }
        } else if (key == 'W') {
            if (direc =='R') {
                if (val == 90) {
                    result['N'] = obj[key]
                } else if (val == 180) {
                    result['E'] = obj[key]
                } else if (val == 270) {
                    result['S'] = obj[key]				
                }
            } else if (direc == 'L') {
                if (val == 90) {
                    result['S'] = obj[key]				
                } else if (val == 180) {
                    result['E'] = obj[key]
                } else if (val == 270) {
                    result['N'] = obj[key]				
                }			
            }
        }
    }
    console.log(result)
	return result
}

console.log(navicate2(array))