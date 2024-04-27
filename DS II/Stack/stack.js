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

        this.top = this.top.next;
    }

    display(){
        let current = this.top;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.display();

console.log('After poped');

stack.pop();

stack.display();