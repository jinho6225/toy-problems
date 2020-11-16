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
        if (index >= this.length) {
            return this.append(value)
        }
        let newNode = new Node(value)
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
        return this.printList()
        // let cur = this.head
        // let prev = null
        // let i = 0
        // while (cur) {
        //     if (index === i) {
        //         prev.next = newNode
        //         newNode.next = cur
        //         break;
        //     }
        //     prev = cur
        //     cur = cur.next
        //     i++
        // }
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove (index) {
        const leader = this.traverseToIndex(index-1)
        leader.next = leader.next.next
        this.length--;
    }

    reverse() {
        //Code Here
        let cur = this.head
        let prev = null
        while (cur) {
            let tmp = cur.next
            cur.next = prev
            prev = cur
            cur = tmp
        }
        this.head = prev
        return this.printList();
    }
}
let myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList(), '1')
console.log(myLinkedList)
