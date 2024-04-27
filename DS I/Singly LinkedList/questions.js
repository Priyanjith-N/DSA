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

function displaySLL(){
    let temp = head;

    if(!temp){
        return console.log('List is empty');
    }

    while(temp){
        console.log(temp.data);
        temp = temp.next;
    }
}

function insertNodeAfter(nextToValue, data){
    const newNode = new Node(data);
    let temp = prev = head;

    if(!temp){
        return console.log('List is empty');
    }

    if(head.data === nextToValue){
        newNode.next = head.next;
        head.next = newNode;
        if(tail.data === nextToValue){
            tail = newNode;
        }
        return;
    }

    if(tail.data === nextToValue){
        tail.next = newNode;
        tail = newNode;
    }

    while(temp){
        if(temp.data === nextToValue){
            newNode.next = temp.next;
            temp.next = newNode;
            return;
        }

        temp = temp.next;
    }

    return console.log('Value Not found');
}

function insertNodeBefore(before, data){
    const newNode = new Node(data);
    let temp = prev = head;

    if(!temp){
        return console.log('List is empty');
    }

    if(head.data === before){
        newNode.next = head;
        head = newNode;
        return;
    }

    while(temp){
        if(temp.data === before){
            prev.next = newNode;
            newNode.next = temp;
            return;
        }

        prev = temp;
        temp = temp.next;
    }

    return console.log('Value Not found');
}

function deleteNode(data){
    let temp = prev = head;

    if(!temp){
        return console.log('List is empty');
    }

    if(head.data === data){
        head = head.next;
        return;
    }

    while(temp){
        if(temp.data === data){
            prev.next = temp.next;
            return;
        }
        prev = temp;
        temp = temp.next;
    }

    return console.log('Value Not Found');
}

function displayInReveseOrderHelper(temp){
    if(!temp){
        return;
    }

    displayInReveseOrderHelper((temp.next));

    console.log(temp.data)
}

function displayInReveseOrder(){ //O(n)TS
    const temp = head;

    if(!temp){
        return console.log('List is empty');
    }

    displayInReveseOrderHelper(temp);
}

function addNodeAtBegining(data){
    const newNode = new Node(data);

    if(!head){
        return console.log('List is empty');
    }

    newNode.next = head;

    head = newNode;
}

function addNodeAtEnd(data){
    const newNode = new Node(data);

    if(!head){
        return console.log('List is empty');
    }

    tail.next = newNode;
    tail = newNode;
}

function removeDuplicatedInSortedSinglyLinkedList(){
    let currentNode = head;
    let nextNode = currentNode?.next;

    if(!currentNode){
        return console.log('List is empty');
    }

    while(nextNode){
        if(currentNode.data === nextNode.data){
            if(nextNode === tail){
                tail = currentNode;
            }
            currentNode.next = nextNode.next;
            nextNode = nextNode.next;
            continue;
        }
        currentNode = nextNode;
        nextNode = nextNode.next;


    }
}

function removeDuplicateBetterWay(){
    let currentNode = head;
    let nextNode = head?.next;

    if(!currentNode){
        return console.log('List is empty');
    }

    while(nextNode){
        if(currentNode.data === nextNode.data){
            if(nextNode === tail){
                tail = currentNode;
                tail.next = null;
            }
            nextNode = nextNode.next;
            continue;
        }

        currentNode.next = nextNode;
        currentNode = nextNode;
        nextNode = nextNode.next;
    }
}

function convertArrayToLinkedList(arr){
    if(arr.length === 0){
        return console.log('Array is empty');
    }
    arr.forEach(element => {
        const newNode = new Node(element);

        if(!head){
            head = newNode;
        }else{
            tail.next = newNode;
        }
        tail = newNode;
    });
}

function findMiddle(){
    let slow = fast = head;
    let start = 1;

    if(!head){
        return console.log('List is empty');
    }

    while(fast.next){
        while(fast.next && start <= 2){
            start++;
            fast = fast.next;
        }

        if(!fast.next)break;
        start = 1;
        slow = slow.next;
    }

    return slow.data;
}

addNode(10);
addNode(20);
addNode(30);
addNode(40);
addNode(50);
addNode(60);

displaySLL();

// console.log('after Insert');

// insertNodeAfter(23, 78);

// console.log('after delete');

// deleteNode(20)

// console.log('add node at the begining');

// addNodeAtBegining(340);

// console.log('add node at the end');

// addNodeAtEnd(49);

// console.log('Insert Node before a value');

// insertNodeBefore(20,45);

// console.log('after removeing duplicated from singly linked list');

// removeDuplicateBetterWay();

// removeDuplicatedInSortedSinglyLinkedList();

// const arr = [12,34,56,78,32];

// convertArrayToLinkedList(arr);

// displaySLL();

// console.log('In reverse order');

// displayInReveseOrder();

console.log('Middle of list');

console.log(findMiddle());