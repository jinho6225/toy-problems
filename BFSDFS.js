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
                4     20
            1   6 15  170
    InOder [1,4,6,9,15,20,170]
    PreOrder [9,4,1,6,20,15,170]
    PostOrder [1,6,4,15,170,20,9]
*/
function depthFirstSearchPostOder(root) {
    
}
const depthFirstSearchPostOder_iterative = (root) => {
    
}
function depthFirstSearchInOder(root) {
    
}
function depthFirstSearchInOder_iterative(root){
    
}
function depthFirstSearchPreOder(root) {
    
}
const depthFirstSearchPreOder_iterative = (root) => {
    
}
function breadthFirstSearch(root) {

} 
function breadthFirstSearchR(root) {

} 
console.log(depthFirstSearchPreOder(tree));
console.log(depthFirstSearchPreOder_iterative(tree));
console.log(depthFirstSearchInOder(tree));
console.log(depthFirstSearchInOder_iterative(tree));
console.log(depthFirstSearchPostOder(tree));
console.log(depthFirstSearchPostOder_iterative(tree));
console.log(breadthFirstSearch(tree));
console.log(breadthFirstSearchR(tree));
