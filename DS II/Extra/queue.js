class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue(data){
        const newNode = new Node(data);

        if(!this.front){
            this.front = newNode;
        }else{
            this.rear.next = newNode;
        }

        this.rear = newNode;
    }

    dequeue(){
        if(!this.front){
            return console.log('List is empty');
        }

        this.front = this.front.next;

        if(!this.front){
            this.rear = null;
        }
    }

    displayQueue(){
        let current = this.front;

        if(!current){
            return console.log('List is empty');
        }

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.displayQueue();

