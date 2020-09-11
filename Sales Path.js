/*
Sales Path
The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary). The root is the company itself, and every node in the tree represents a car distributor that receives cars from the parent node and ships them to its children nodes. The leaf nodes are car dealerships that sell cars direct to consumers. In addition, every node holds an integer that is the cost of shipping a car to it.
Take for example the tree below:
alt
A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the tree, is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in the path. For example, in the tree above one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).
Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node rootNode, write a function getCheapestCost that calculates the minimal Sales Path cost in the tree.
Implement your function in the most efficient manner and analyze its time and space complexities.

For example:
Given the rootNode of the tree in diagram above
Your function would return:
7 since it’s the minimal Sales Path cost (there are actually two Sales Paths in the tree whose cost is 7: 0→6→1 and 0→3→2→1→1)
Constraints:
[time limit] 5000ms
[input] Node rootNode
0 ≤ rootNode.cost ≤ 100000
[output] integer
*/

function getCheapestCost(rootNode) {
    // your code goes here
    let cheapCost = Infinity
    function helper(node, sum) {
      //base case
      if (!node.children.length) {
        if (sum < cheapCost) {
          cheapCost = sum
        }
      }
      //recursive
      for (let i = 0; i < node.children.length; i++) {
        let pathSum = sum
        pathSum += node.children[i].cost
        helper(node.children[i], pathSum)
      }
    }
    helper(rootNode, rootNode.cost)
    return cheapCost
  }
  
  /******************************************
   * Use the helper code below to implement *
   * and test your function above           *
   ******************************************/ 
  
  // Constructor to create a new Node
  function Node(cost) {
    this.cost = cost;
    this.children = [];
  }
  
  //Jin-ho
  //Omar
  
  var rootNode = new Node(0);
  let node3 = new Node(3);
  let node5 = new Node(5);
  let node6 = new Node(6);
  let node0 = new Node(0);
  let node2 = new Node(2);
  let node1 = new Node(1);
  
  rootNode.children.push(node5);
  rootNode.children.push(node3);
  rootNode.children.push(node6);
  
  node5.children.push(new Node(4));
  node3.children.push(node2);
  node3.children.push(node0);
  node6.children.push(new Node(1));
  node6.children.push(new Node(5));
  
  node2.children.push(node1)
  node0.children.push(new Node(10))
  
  node1.children.push(new Node(1))
  
  
  
  
  
  
  let cheapestCost = getCheapestCost(rootNode);
  console.log(cheapestCost);
  
  
  
  
  /*
  let cheapCost = Infinity
  function helper(node, sum) {
    //base case
    if (!node.children.length) {
      if (sum < cheapCost) {
        cheapCost = sum
      }
    }
    //recursive
    for (let i = 0; i < node.children.length; i++) {
      let pathSum = sum
      pathSum += node[i].cost
      helper(node[i], pathSum)
    }
    
  }
  helper(node, node.cost)
  return cheapCost
  */