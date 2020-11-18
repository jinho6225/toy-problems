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

    }

    prepend(value) {

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
        
    }
    traverseToIndex(index) {

    }
    remove (index) {

    }

    reverse() {

    }
}
let myLinkedList = new LinkedList(10);
// myLinkedList.append(5)
// myLinkedList.prepend(1)
// myLinkedList.insert(2, 99)
// console.log(myLinkedList.printList())
// myLinkedList.reverse()
// console.log(myLinkedList.printList(), '1')
// console.log(myLinkedList)
