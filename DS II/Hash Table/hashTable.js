class Node{
    constructor(key, data){
        this.key = key;
        this.data = data;
        this.next = null;
    }
}

class Hashtable{
    constructor(size){
        this.size = size;
        this.arr = new Array(this.size);
    }

    hashKey(key) {
        if(typeof key === 'number'){
            return (key % this.size);
        }

        let total = 0;

        for(let i=0;i<key.length;i++){
            total += key[i].charCodeAt();
        }

        return (total%this.size);
    }

    set(key, data){
        const newNode = new Node(key, data);

        
        const index = this.hashKey(key);
        

        if(!this.arr[index]){
            this.arr[index] = newNode;
            return;
        }

        let current = this.arr[index];
        let prev = current;
        if(current.key === key){
            newNode.next = current.next;
            this.arr[index] = newNode;
            return;
        }

        while(current){
            if(current.key === key){
                prev.next = newNode;
                newNode.next = current.next;
                return;
            }

            prev = current;
            current = current.next;
        }

        prev.next = newNode;
    }

    get(key){
        const index = this.hashKey(key);

        let current = this.arr[index];

        while(current){
            if(current.key === key){
                return current.data;
            }

            current = current.next;
        }

        return 'Not a key';
    }

    display(){
        for(let i = 0;i<this.size;i++){
            let current = this.arr[i];
            while(current){
                console.log("key: ", current.key, ','," Value:", current.data);
                current = current.next;
            }
        }
    }
}

const table = new Hashtable(12);

table.set('gg', 'dilshad');
table.set(1, 'srg');
table.set('age', 'shahala');
table.set('age', 'ljkj');

table.set('ega', 'shaham');
table.set('gea', 'danish');
table.set('ega', 'dilna');

// table.arr.forEach(value => console.log(value))
table.display()
// console.log(table.get('ega'));