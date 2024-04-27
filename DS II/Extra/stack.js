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

        if(this.top){
            newNode.next = this.top;
        }

        this.top = newNode;
    }

    pop(){
        if(!this.top){
            return 'Stack underflow';
        }

        const data = this.top.data;

        this.top = this.top.next;

        return data;
    }

    displayStack(){
        let current = this.top;

        if(!this.top){
            return console.log('Stack underflow');;
        }

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const stack = new Stack();

stack.displayStack();