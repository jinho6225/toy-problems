/*
As your flight slowly drifts through the sky, the Elves at the Mythical Information Bureau at the North Pole contact you. They'd like some help debugging a malfunctioning experimental energy source aboard one of their super-secret imaging satellites.

The experimental energy source is based on cutting-edge technology: a set of Conway Cubes contained in a pocket dimension! When you hear it's having problems, you can't help but agree to take a look.

The pocket dimension contains an infinite 3-dimensional grid. At every integer 3-dimensional coordinate (x,y,z), there exists a single cube which is either active or inactive.

In the initial state of the pocket dimension, almost all cubes start inactive. The only exception to this is a small flat region of cubes (your puzzle input); the cubes in this region start in the specified active (#) or inactive (.) state.

The energy source then proceeds to boot up by executing six cycles.

Each cube only ever considers its neighbors: any of the 26 other cubes where any of their coordinates differ by at most 1. For example, given the cube at x=1,y=2,z=3, its neighbors include the cube at x=2,y=2,z=2, the cube at x=0,y=2,z=3, and so on.

During a cycle, all cubes simultaneously change their state according to the following rules:

If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive.
If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.
The engineers responsible for this experimental energy source would like you to simulate the pocket dimension and determine what the configuration of cubes should be at the end of the six-cycle boot process.

For example, consider the following initial state:

.#.
..#
###
Even though the pocket dimension is 3-dimensional, this initial state represents a small 2-dimensional slice of it. (In particular, this initial state defines a 3x3x1 region of the 3-dimensional space.)

Simulating a few cycles from this initial state produces the following configurations, where the result of each cycle is shown layer-by-layer at each given z coordinate (and the frame of view follows the active cells in each cycle):

Before any cycles:

z=0
.#.
..#
###


After 1 cycle:

z=-1
#..
..#
.#.

z=0
#.#
.##
.#.

z=1
#..
..#
.#.


After 2 cycles:

z=-2
.....
.....
..#..
.....
.....

z=-1
..#..
.#..#
....#
.#...
.....

z=0
##...
##...
#....
....#
.###.

z=1
..#..
.#..#
....#
.#...
.....

z=2
.....
.....
..#..
.....
.....


After 3 cycles:

z=-2
.......
.......
..##...
..###..
.......
.......
.......

z=-1
..#....
...#...
#......
.....##
.#...#.
..#.#..
...#...

z=0
...#...
.......
#......
.......
.....##
.##.#..
...#...

z=1
..#....
...#...
#......
.....##
.#...#.
..#.#..
...#...

z=2
.......
.......
..##...
..###..
.......
.......
.......
After the full six-cycle boot process completes, 112 cubes are left in the active state.

Starting with your given initial configuration, simulate six cycles. How many cubes are left in the active state after the sixth cycle?
*/

let input = `#.##.##.
.##..#..
....#..#
.##....#
#..##...
.###..#.
..#.#..#
.....#..`

const lines = input.split('\n').map(x => x.split(''))
  


 
let map = new Map()
lines.forEach((line, x) => {
	line.forEach((el, y) => {
		let key = [x, y, 0].join(',')
		if (el === '#') {
			map.set(key, true)
		} else {
			map.set(key, false)
		}
	})
})
// console.log(map, 'map')

for (let i = 0; i < 6; i++) {

	let minx = null
	let miny = null
	let minz = null
	let maxx = null
	let maxy = null
	let maxz = null
	
	for (let key of map.keys()){
		let [x, y, z] = key.split(',').map(el => Number(el))
		if (x < minx) minx = x
		if (y < miny) miny = y
		if (z < minz) minz = z
		if (x > maxx) maxx = x
		if (y > maxy) maxy = y
		if (z > maxz) maxz = z
	}

	let newMap = new Map()
	for (let x = minx-1; x <= maxx+1; x++) {
		for (let y = miny-1; y <= maxy+1; y++) {
			for (let z = minz-1; z <= maxz+1; z++) {
				let key = [x,y,z].join(',')
				if (map.has(key)) {
					if (map.get(key)) {
						let num = checkNeighbor(map,x,y,z)
						if (num === 2 || num === 3) {
							newMap.set(key, true)
						} else {
							newMap.set(key, false)
						}							
					} else {
						let num = checkNeighbor(map,x,y,z)
						if (num === 3) {
							newMap.set(key, true)
						} else {
							newMap.set(key, false)
						}						
					}
				} else {
					let num = checkNeighbor(map,x,y,z)
					if (num === 3) {
						newMap.set(key, true)
					} else {
						newMap.set(key, false)
					}
				}

			}		
		}	
	}

	map = newMap
	let arr = Array.from(map.values())
	console.log(arr.filter(x => x).length)
}

function checkNeighbor(map, x, y, z) {
	// console.log(map, x, y, z)
	let result = [], count = 0
	for (let i = x-1; i <= x+1; i++) {
		for (let j = y-1; j <= y+1; j++) {
			for (let k = z-1; k <= z+1; k++) {				
				if (x ===i && y ===j && z ===k) continue
				count++
				let key = [i,j,k].join(',')
				if (map.has(key) && map.get(key) === true) {
					result.push(true)
				}
			}
		}
	}
	// console.log(count, 'count')
	return result.length
}

// part 2


// let map = new Map()
// lines.forEach((line, x) => {
// 	line.forEach((el, y) => {
// 		let key = [x, y, 0, 0].join(',')
// 		if (el === '#') {
// 			map.set(key, true)
// 		} else {
// 			map.set(key, false)
// 		}
// 	})
// })
// // console.log(map, 'map')

// for (let i = 0; i < 6; i++) {

// 	let minx = null
// 	let miny = null
// 	let minz = null
// 	let minw = null
// 	let maxx = null
// 	let maxy = null
// 	let maxz = null
// 	let maxw = null

	
// 	for (let key of map.keys()){
// 		let [x, y, z, w] = key.split(',').map(el => Number(el))
// 		if (x < minx) minx = x
// 		if (y < miny) miny = y
// 		if (z < minz) minz = z
// 		if (w < minw) minw = w
// 		if (x > maxx) maxx = x
// 		if (y > maxy) maxy = y
// 		if (z > maxz) maxz = z
// 		if (w > maxw) maxw = w
// 	}

// 	let newMap = new Map()
// 	for (let x = minx-1; x <= maxx+1; x++) {
// 		for (let y = miny-1; y <= maxy+1; y++) {
// 			for (let z = minz-1; z <= maxz+1; z++) {
// 				for (let w = minw-1; w <= maxw+1; w++) {
// 					let key = [x,y,z,w].join(',')
// 					if (map.has(key)) {
// 						if (map.get(key)) {
// 							let num = checkNeighbor(map,x,y,z,w)
// 							if (num === 2 || num === 3) {
// 								newMap.set(key, true)
// 							} else {
// 								newMap.set(key, false)
// 							}							
// 						} else {
// 							let num = checkNeighbor(map,x,y,z,w)
// 							if (num === 3) {
// 								newMap.set(key, true)
// 							} else {
// 								newMap.set(key, false)
// 							}						
// 						}
// 					} else {
// 						let num = checkNeighbor(map,x,y,z,w)
// 						if (num === 3) {
// 							newMap.set(key, true)
// 						} else {
// 							newMap.set(key, false)
// 						}
// 					}
// 				}
// 			}		
// 		}	
// 	}

// 	map = newMap
// 	let arr = Array.from(map.values())
// 	console.log(arr.filter(x => x).length)
// }

// function checkNeighbor(map, x, y, z, w) {
// 	// console.log(map, x, y, z)
// 	let result = [], count = 0
// 	for (let i = x-1; i <= x+1; i++) {
// 		for (let j = y-1; j <= y+1; j++) {
// 			for (let k = z-1; k <= z+1; k++) {		
// 				for (let l = w-1; l <= w+1; l++) {				
		
// 					if (x ===i && y ===j && z ===k&& w ===l) continue
// 					count++
// 					let key = [i,j,k,l].join(',')
// 					if (map.has(key) && map.get(key) === true) {
// 						result.push(true)
// 					}
// 				}
// 			}
// 		}
// 	}
// 	// console.log(count, 'count')
// 	return result.length
// }