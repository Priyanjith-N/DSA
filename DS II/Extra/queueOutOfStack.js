class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(data){
        const newNode = new Node(data);

        if(!this.top){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop(){
        if(!this.top){
            return console.log('Stack underflow');
        }

        const poped = this.top;

        this.top = this.top.next;

        return poped.data;
    }

    display(){
        let current = this.top;

        if(!this.top){
            return console.log('Stack underflow');
        }

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

class Queue{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(data){
        this.s1.push(data);
        return;
    }

    dequeue(){
        if(!this.s2.top){
            while(this.s1.top){
                this.s2.push((this.s1.pop()));
            }
        }

        return (this.s2.pop());
    }

    display(){
        return this.s2.display();
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);


console.log('queue');

queue.dequeue();

queue.display();
