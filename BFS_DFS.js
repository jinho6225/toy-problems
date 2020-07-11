let tree = {
  val: 9,
  left: {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 170, left: null, right: null },
  },
};
/*
	-	BFS (breadthFirstSearch) - O(n)
    iteratively & recursively
	-	DFS (depthFirstSearch) - O(n)
              9
        4           20
    1       6  15       170
InOder [1,4,6,9,15,20,170]
PreOrder [9,4,1,6,20,15,170]
PostOrder [1,6,4,15,170,20,9]
*/
function breadthFirstSearch(root) {
  if (!root) return [];
  let list = [],
    queue = [],
    cur = root;
  queue.push(cur); // TreeNode(9)
  while (queue.length !== 0) {
    cur = queue.shift(); //queue=[] //cur 9//queue[20] cur 4 //queue[1,4] cur 20
    list.push(cur.val); //list [9] // list [9,4] // list [9,4,20]
    if (cur.left) queue.push(cur.left); //queue[4] // queue[20, 1] //queue[1,4,15]
    if (cur.right) queue.push(cur.right); //queue[4,20] // queue[20, 1, 4] //queue[1,4,15,170]
  }
  return list;
}
function breadthFirstSearchR(root) {
  let list = [],
    queue = [],
    cur = root;
  if (!root) return list;
  queue.push(cur);
  function helper(cur) {
    cur = queue.shift();
    if (!cur) return;
    list.push(cur.val);
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
    helper(cur);
  }
  helper(cur);
  return list;
}
function depthFirstSearchPostOder(root) {
  let list = [];
  const helper = (root) => {
    if (!root) return list;
    if (root.left) helper(root.left);
    if (root.right) helper(root.right);
    list.push(root.val);
  };
  helper(root);
  return list;
}
const depthFirstSearchPostOder_iterative = (root) => {
  let stack = [],
    list = [],
    cur = root;
  stack.push(cur);
  while (stack.length > 0) {
    cur = stack.pop();
    list.unshift(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }
  return list;
};
function depthFirstSearchInOder(root) {
  let list = [];
  const helper = (root) => {
    if (!root) return list;
    if (root.left) helper(root.left);
    list.push(root.val);
    if (root.right) helper(root.right);
  };
  helper(root);
  return list;
}
function depthFirstSearchInOder_iterative(root) {
  let list = [],
    stack = [],
    cur = root;
  while (true) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    if (stack.length === 0) break;
    cur = stack.pop();
    list.push(cur.val);
    cur = cur.right;
  }
  return list;
}
function depthFirstSearchPreOder(root) {
  let list = [];
  const helper = (root) => {
    if (!root) return list;
    list.push(root.val);
    if (root.left) helper(root.left);
    if (root.right) helper(root.right);
  };
  helper(root);
  return list;
}
const depthFirstSearchPreOder_iterative = (root) => {
  let stack = [],
    list = [],
    cur = root;
  while (true) {
    while (cur) {
      list.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    if (stack.length === 0) break;
    cur = stack.pop();
    cur = cur.right;
  }
  return list;
};
console.log(breadthFirstSearch(tree));
console.log(breadthFirstSearchR(tree));
console.log(depthFirstSearchPreOder(tree));
console.log(depthFirstSearchPreOder_iterative(tree));
console.log(depthFirstSearchInOder(tree));
console.log(depthFirstSearchInOder_iterative(tree));
console.log(depthFirstSearchPostOder(tree));
console.log(depthFirstSearchPostOder_iterative(tree));
