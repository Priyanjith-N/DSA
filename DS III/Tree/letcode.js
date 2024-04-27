function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let num1 = reverse(current1);
    let num2 = reverse(current2);
    let total = num1  + num2;
    let head = null;
    let current = null;
    if(total === 0){
        return new ListNode();
    }

    while(total > 0){
        const reminder = total % BigInt(10);
        total = Math.floor(total / BigInt(10));

        if(!head){
            head = new ListNode(reminder);
            current = head;
            continue;
        }

        current.next = new ListNode(reminder);
        current = current.next;
    }

    return head
};

function reverse(current){
    if(!current){
        return null;
    }

    let num = reverse(current.next);

    if(!num){
        return BigInt(current.val);
    }

    num *= BigInt(10);

    num += BigInt(current.val);

    return num;
}

const obj1 = {
    val: 2,
    next:{
        val: 4,
        next:{
            val: 3,
            next: null
        }
    }
}

const obj2 = {
    val: 5,
    next:{
        val: 6,
        next:{
            val: 4,
            next: null
        }
    }
}

console.log(addTwoNumbers(obj1, obj2));

const arr = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];

console.log(typeof BigInt(1));