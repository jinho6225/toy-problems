class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value)
        if (!this.root) {
            this.root = node
        } else {
            let cur = this.root;
            while (true) {
                if (value < cur.value) {
                    if (!cur.left) {
                        cur.left = node 
                        return this
                    }
                    cur = cur.left
                } else {
                    if (!cur.right) {
                        cur.right = node
                        return this
                    }
                    cur = cur.right
                }
                
            }
        }
        

    }
    lookup(value){
        //Code here
        if (!this.root) {
            return false;
        }
        let cur = this.root;
        while(cur) {
            if (value < cur.value) {
                cur = cur.left
            } else if (value > cur.value) {
                cur = cur.right
            } else if (value === cur.value) {
                return cur
            }
        }
        return false
    }
    remove() {
        
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.lookup(20))

console.log(tree)
console.log(JSON.stringify(traverse(tree.root)))

  //     9
  //  4     20
  //1  6  15  170

  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  




