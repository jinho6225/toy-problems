class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
    }
    enqueue(value){

    }
    dequeue(){

    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('Joy')
  myQueue.enqueue('Matt')
  myQueue.enqueue('Pavel')
  myQueue.enqueue('Samir')

  myQueue.dequeue()
  console.log(myQueue.peek())

  console.log(myQueue)
  //Joy
  //Matt
  //Pavel
  //Samir