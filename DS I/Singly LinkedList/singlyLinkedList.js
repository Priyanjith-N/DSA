class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = tail = null;

function addNode(data){
    const newNode = new Node(data);

    if(!head){
        head = newNode;
    }else{
        tail.next = newNode;
    }

    tail = newNode;
}

function deleteNode(data){
    let temp = prev = head;

    if(!temp){
        return console.log('Linked list is empty');
    }

    if(temp.data === data){
        head = temp.next;
        return;
    }

    while(temp){
        if(temp.data === data){
            prev.next = temp.next;
            if(temp === tail){
                tail = prev;
                tail.next = null;
            }
            return;
        }

        prev = temp;
        temp = temp.next;
    }

    return console.log('Value not found');
}

function displayNodes(){
    if(!head){
        return console.log('empty');
    }

    let temp = head;

    while(temp){
        console.log(temp.data);

        temp = temp.next;
    }
}

function insertAfter(nextTo, data){
    const newNode = new Node(data);
    let temp = head;

    if(!head){
        return console.log('Linked list is empty');
    }

    if(head.data === nextTo){
        newNode.next = head.next;
        head.next = newNode;
        return;
    }

    if(tail.data === nextTo){
        tail.next = newNode;
        tail = newNode;
        return;
    }

    while(temp){
        if(temp.data === nextTo){
            newNode.next = temp.next;
            temp.next = newNode;
            return;
        }

        temp = temp.next;
    }

    return console.log('Value not found');
}

// displayNodes();

addNode(10);
addNode(20);
addNode(50);

displayNodes();

// deleteNode(50);

// console.log('after delete');

insertAfter(20, 78);

console.log('after insert');

displayNodes();