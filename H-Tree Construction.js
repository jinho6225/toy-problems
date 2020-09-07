/*
H-Tree Construction
An H-tree is a geometric shape that consists of a repeating pattern resembles the letter “H”.
It can be constructed by starting with a line segment of arbitrary length, drawing two segments of the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.
Here are some examples of H-trees at different levels of depth:
    H   H
H     H
    H   H
altdepth = 1
altdepth = 2
altdepth = 3

Write a function drawHTree that constructs an H-tree, given its center (x and y coordinates), a starting length, and depth. Assume that the starting line is parallel to the X-axis.
Use the function drawLine provided to implement your algorithm. In a production code, a drawLine function would render a real line between two points. However, this is not a real production environment, so to make things easier, implement drawLine such that it simply prints its arguments (the print format is left to your discretion).
Analyze the time and space complexity of your algorithm. In your analysis, assume that drawLine's time and space complexities are constant, i.e. O(1).
Constraints:
[time limit] 5000ms
[input] double x
[input] double y
[input] double length
[input] double depth
0 ≤ depth ≤ 10
*/

function drawLine(x0, y0, x1, y1) {
    // draw a line with endpoints(x0, y0) and (x1, y1)
    console.log(`starting point: x: ${x0} y: ${y0}`)
    console.log(`ending point: x: ${x1} y: ${y1}`)
  }
  function drawHTree(x, y, length, depth) {
    let halfLength = length / 2 
    drawLine(x - halfLength, y, x + halfLength, y)
    drawLine(x - halfLength, y + halfLength, x - halfLength, y - halfLength)
    drawLine(x + halfLength, y + halfLength, x + halfLength, y - halfLength)
    
    length = length / Math.sqrt(2)
    if (depth === 0) {
      return
    } else if (depth > 1) {
      drawHTree(x - halfLength, y + halfLength, length, depth-1)
      drawHTree(x - halfLength, y - halfLength, length, depth-1)
      drawHTree(x + halfLength, y + halfLength, length, depth-1)
      drawHTree(x + halfLength, y - halfLength, length, depth-1)    
    }
  }
  console.log(drawHTree(0,0,5,2))