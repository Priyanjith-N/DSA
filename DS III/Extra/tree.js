class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        let current = this.root;
        const newNode = new Node( )
        if(!this.root){
            this.root = newNode;
            return;
        }

        while(true){
            if(current.data < data){
                if(!current.right){
                    current.right = newNode;
                    return;
                }else{
                    current = current.right;
                }
            }else{
                if(!current.left){
                    current.left = newNode;
                    return;
                }else{
                    current = current.left;
                }
            }
        }
    }

    search(data){
        let current = this.root;

        if(!current){
            return console.log('Tree is empty');
        }

        while(current){
            if(current.data > data){
                current = current.left;
            }else if(current.data < data){
                current = current.right;
            }else{
                return true;
            }
        }

        return false;
    }
}

const bst = new BST();

bst.insert(7);
bst.insert(3);
bst.insert(5);
bst.insert(2);
bst.insert(23);
bst.insert(13);
bst.insert(1);

console.log(bst.search(13));