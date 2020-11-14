/*
Drone Flight Planner
You’re an engineer at a disruptive drone delivery startup and your CTO asks you to come up with an efficient algorithm that calculates the minimum amount of energy required for the company’s drone to complete its flight. You know that the drone burns 1 kWh (kilowatt-hour is an energy unit) for every mile it ascends, and it gains 1 kWh for every mile it descends. Flying sideways neither burns nor adds any energy.
Given an array route of 3D points, implement a function calcDroneMinEnergy that computes and returns the minimal amount of energy the drone would need to complete its route. Assume that the drone starts its flight at the first point in route. That is, no energy was expended to place the drone at the starting point.
For simplicity, every 3D point will be represented as an integer array whose length is 3. Also, the values at indexes 0, 1, and 2 represent the x, y and z coordinates in a 3D point, respectively.
Explain your solution and analyze its time and space complexities.

Example:
input:  route = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]
output: 5 # less than 5 kWh and the drone would crash before the finish
          # line. More than `5` kWh and it’d end up with excess energy
Constraints:
[time limit] 5000ms
[input] array.array.integer route
1 ≤ route.length ≤ 100
[output] integer
*/
function calcDroneMinEnergy(route) {function calcDroneMinEnergy(route) {

    let initEnergy = 0
    let needEnergy = 0
    for (let i = 0; i < route.length-1; i++) {
      if(route[i][2] > route[i+1][2]) {
        initEnergy = initEnergy + (route[i][2] - route[i+1][2])
      } else {
        initEnergy = initEnergy - ( route[i+1][2] - route[i][2] )
      }
      if(initEnergy < 0) {
        needEnergy = needEnergy + Math.abs(initEnergy)
        initEnergy = 0 
      }
    }
    return needEnergy 
}
  



//  11/13/2020
function calcDroneMinEnergy(route) {
  // your code goes here
  let needEnergy = 0
  let tank = 0
  for (let i = 0; i < route.length-1; i++) {
    if (route[i][2] - route[i+1][2] >= 0) {
      tank += route[i][2] - route[i+1][2]
    } else {
      tank += (route[i][2] - route[i+1][2])
      if (tank < 0) {
        needEnergy += tank
        tank = 0  
      }
    }
  }
  return needEnergy < 0 ? -needEnergy : needEnergy
}

// the more elegant solution

function calcDroneMinEnergy(route) {
  // your code goes here
  let maxHeight = route[0][2]
  for (let i = 1; i < route.length; i++) {
    if (route[i][2] > maxHeight) {
      maxHeight = route[i][2]
    }
  }
  return maxHeight - route[0][2]
}