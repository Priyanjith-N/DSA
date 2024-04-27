class Node{
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

let head = tail = null;

function addNode(data){
    const newNode = new Node(data);

    if(!head){
        head = newNode;
    } else {
        tail.next = newNode;
        newNode.prev = tail;
    }

    tail = newNode;
}

function deleteNode(data){
    let temp = head;

    if(!temp){
        return console.log('empty');
    }

    if(head.data === data){
        head = head.next;
        if(!head){
            return;
        }
        head.prev = null;
        return;
    }

    if(tail.data === data){
        tail = tail.prev;
        tail.next = null;
        return;
    }

    while(temp){
        if(temp.data === data){
            temp.next.prev = temp.prev;
            temp.prev.next = temp.next;
            return;
        }

        temp = temp.next;
    }

    return console.log('Value not found');
}

function insertAfter(nextTo, data){
    const newNode = new Node(data);
    let temp = head;

    if(!temp){
        return console.log('empty');
    }

    if(head.data === nextTo){
        newNode.prev = head;
        newNode.next = head.next;
        if(head.next){
            head.next.prev = newNode;
        }
        head.next = newNode;
        if(tail.data === nextTo){
            tail = newNode;
        }
        return;
    }

    if(tail.data === nextTo){
        tail.next = newNode;
        newNode.prev = tail;
        tail = newNode;
        return;
    }

    while(temp){
        if(temp.data === nextTo){
            newNode.next = temp.next;
            temp.next.prev = newNode;
            temp.next = newNode;
            return;
        }
        temp = temp.next;
    }

    return console.log('value not found');
}

function insertBefore(before, data){
    const newNode = new Node(data);
    let temp = head;

    if(!temp){
        return console.log('empty');
    }

    if(head.data === before){
        head.prev = newNode;
        newNode.next = head;
        head = newNode;
        return;
    }

    if(tail.data === before){
        newNode.prev = tail.prev;
        tail.prev.next = newNode;
        tail.prev = newNode;
        newNode.next = tail;
        return;
    }

    while(temp){
        if(temp.data === before){
            temp.prev.next = newNode;
            newNode.prev = temp.prev;
            temp.prev = newNode;
            newNode.next = temp;
            return;
        }
        temp = temp.next;
    }

    return console.log('Value not found');
}

function display(){
    let temp = head;

    if(!temp){
        return console.log('empty');
    }

    while(temp){
        console.log(temp.data);
        temp = temp.next;
    }
}

function displayReverse(){
    let temp = tail;

    if(!tail){
        return console.log('empty');
    }

    while(temp){
        console.log(temp.data);
        temp = temp.prev;
    }
}

function convertArrayToLinkedList(arr){
    if(arr.length === 0){
        return console.log('array empty');
    }

    arr.forEach(element => {
        const newNode = new Node(element);

        if(!head){
            head = newNode;
        }else{
            newNode.prev = tail;
            tail.next = newNode;
        }

        tail = newNode;
    });
}

function AddNodeAtBeginning(data){
    const newNode = new Node(data);

    if(!head){
        return console.log('List is empty');
    }

    head.prev = newNode;
    newNode.next = head;
    head = newNode;
}

function AddNodeAtEnd(data){
    const newNode = new Node(data);

    if(!head){
        return console.log('List is empty');
    }

    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;
}



addNode(1);
// addNode(2);
// addNode(3);
// addNode(4);

const arr = [45,6,43,31,33];

convertArrayToLinkedList(arr);

display();

// console.log('after delete');

// deleteNode(5);

// console.log('after insert');

// insertAfter(2, 0);

// console.log('after before');

// insertBefore(2,0)

// display();