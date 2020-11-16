class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value)
        let holding = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.tail.prev = holding
        this.length++
        return this
    }

    // prepend(value) {
    //     const newNode = new Node(value)
    //     // let curHead = this.head;
    //     // this.head = newNode
    //     // this.head.next = curHead
    //     newNode.next = this.head;
    //     this.head = newNode;
    //     this.length++
    //     return this
    // }
    // printList() {
    //     const array = [];
    //     let currentNode = this.head;
    //     while (currentNode !== null) {
    //         array.push(currentNode.value)
    //         currentNode = currentNode.next
    //     }
    //     return array
    // }
    // insert(index, value){
    //     //Code here
    //     if (index >= this.length) {
    //         return this.append(value)
    //     }
    //     let newNode = new Node(value)
    //     const leader = this.traverseToIndex(index-1)
    //     const holdingPointer = leader.next
    //     leader.next = newNode;
    //     newNode.next = holdingPointer;
    //     this.length++
    //     return this.printList()
    //     // let cur = this.head
    //     // let prev = null
    //     // let i = 0
    //     // while (cur) {
    //     //     if (index === i) {
    //     //         prev.next = newNode
    //     //         newNode.next = cur
    //     //         break;
    //     //     }
    //     //     prev = cur
    //     //     cur = cur.next
    //     //     i++
    //     // }
    //     return this.printList();
    // }
    // traverseToIndex(index) {
    //     let counter = 0;
    //     let currentNode = this.head;
    //     while (counter !== index) {
    //         currentNode = currentNode.next;
    //         counter++;
    //     }
    //     return currentNode;
    // }
    // remove (index) {
    //     const leader = this.traverseToIndex(index-1)
    //     leader.next = leader.next.next
    //     this.length--;
    // }
}
const myDoublyLinkedList = new DoublyLinkedList(10)
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.insert(2, 99)
// myLinkedList.insert(20, 199)
// console.log(myLinkedList.printList())
// myLinkedList.remove(3)
// console.log(myLinkedList.printList())

console.log(myDoublyLinkedList)
