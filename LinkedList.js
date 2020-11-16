// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        // let curHead = this.head;
        // this.head = newNode
        // this.head.next = curHead
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    insert(index, value){
        //Code here
        let node = new Node(value)
        let cur = this.head
        let prev = null
        let i = 1
        while (cur) {
            if (index === i) {
                prev.next = node
                node.next = cur
                break;
            }
            prev = cur
            cur = cur.next
            i++
        }
        return this.printList();
    }
}
const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.printList())
myLinkedList.insert(2, 99)
console.log(myLinkedList.printList())

console.log(myLinkedList)

// 1 --> 10      5 --> 16
//        \    / 
//          99