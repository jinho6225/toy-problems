class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value){
        let node = new Node(value)
        if (this.length === 0) {
            this.bottom = node
            this.top = node
        } else {
            let holdingPointer = this.top
            this.top = node
            this.top.next = holdingPointer
        }
        this.length++
    }
    pop(){
        if (!this.top) return null
        if (this.bottom === this.top) this.bottom = null
        let holding = this.top
        this.top = this.top.next
        this.length--
        return holding
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.push(5)
  myStack.push(15)
  myStack.push(25)
  myStack.pop()
  myStack.pop()
  myStack.pop()
  console.log(myStack)
  