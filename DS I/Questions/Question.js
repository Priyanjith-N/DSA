class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addNode(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode
        }else{
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
    }

    display(){
        let temp = this.head;

        if(!temp){
            return console.log('empty');
        }

        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    findMidleElement(){
        let start = 1;
        let middle = Math.ceil(this.length / 2);
        let temp = this.head;

        if(!temp){
            return console.log('empty');
        }

        while(temp){
            if(middle === start){
                return console.log(temp.data);
            }

            temp = temp.next;
            start++;
        }
    }

    deleteValueByIndex(index){
        let temp = this.head;
        let prev = this.head;
        let start = 0;

        if(!temp){
            return console.log('empty');
        }

        if((index >= this.length) || index < 0){
            return console.log(`size of list is ${this.length}`);
        }

        while(temp){
            if(start === index){
                if(temp === this.tail){
                    this.tail = prev;
                }
                prev.next = temp.next;
                return;
            }
            start++;
            prev = temp;
            temp = temp.next;
        }
    }
}

const list = new singlyLinkedList();


list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);

// list.display();

// list.findMidleElement();

list.deleteValueByIndex(3);

list.display();