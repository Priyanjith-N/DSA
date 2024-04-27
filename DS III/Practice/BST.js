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
        const newNode = new Node(data);
        let currentNode = this.root;

        if(!this.root){
            this.root = newNode;
            return;
        }

        while(true){
            if(data < currentNode.data){
                if(!currentNode.left){
                   currentNode.left = newNode;
                   return;
                }
                currentNode = currentNode.left;
            }else{
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    contains(data){
        let currentNode = this.root;

        if(!this.root){
            return 'Tree is empty';
        }

        while(currentNode){
            if(currentNode.data > data){
                currentNode = currentNode.left;
            }else if(currentNode.data < data){
                currentNode = currentNode.right;
            }else{
                return true;
            }
        }
        return false;
    }

    delete(target){
        if(!this.root){
            return console.log('Tree is empty');
        }
        this.deleteHelper(target, this.root, null);
    }

    deleteHelper(target, currentNode, parrentNode){
        while(currentNode){
            if(currentNode.data > target){
                parrentNode = currentNode;
                currentNode = currentNode.left;
            }else if(currentNode.data < target){
                parrentNode = currentNode;
                currentNode = currentNode.right;
            }else{
                if(currentNode.right && currentNode.left){
                    const mindata = this.getMin(currentNode.right);
                    currentNode.data = mindata;
                    this.deleteHelper(mindata, currentNode.right, currentNode);
                }else{
                    if(!parrentNode){
                        if(currentNode.left){
                            this.root = currentNode.left;
                        }else{
                            this.root = currentNode.right
                        }
                    }else{
                        if(parrentNode.left === currentNode){
                            if(currentNode.left){
                                parrentNode.left = currentNode.left;
                            }else{
                                parrentNode.left = currentNode.right;
                            }
                        }else{
                            if(currentNode.left){
                                parrentNode.right = currentNode.left;
                            }else{
                                parrentNode.right = currentNode.right;
                            }
                        }
                    }
                }
                break;
            }
        }
    }

    getMin(node){
        if(!node.left){
            return node.data;
        }

        return this.getMin(node.left);
    }

    inOrder(){
        this.inOrderHelper(this.root);
    }

    inOrderHelper(currentNode){
        if(!currentNode){
            return;
        }

        this.inOrderHelper(currentNode.left);
        console.log(currentNode.data);
        this.inOrderHelper(currentNode.right);
    }

    preOrder(){
        this.preOrderHelper(this.root);
    }

    preOrderHelper(currentNode){
        if(!currentNode){
            return;
        }

        console.log(currentNode.data);
        this.preOrderHelper(currentNode.left);
        this.preOrderHelper(currentNode.right);
    }

    postOrder(){
        this.postOrderHelper(this.root);
    }

    postOrderHelper(currentNode){
        if(!currentNode){
            return;
        }

        this.postOrderHelper(currentNode.left);
        this.postOrderHelper(currentNode.right);
        console.log(currentNode.data);
    }

    findClosest(target){
        let currentNode = this.root;
        if(!this.root){
            return 'Tree is empty';
        }
        let closest = this.root.data;

        while(currentNode){
            if(Math.abs(target - closest) > Math.abs(target - currentNode.data)){
                closest = currentNode.data;
            }

            if(target > currentNode.data){
                currentNode = currentNode.right;
            }else if(target < currentNode.data){
                currentNode = currentNode.left;
            }else{
                return currentNode.data;
            }
        }
        return closest;
    }

    isBST(){
        return this.isBSTHelper(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }

    isBSTHelper(currentNode, min, max){
        if(!currentNode){
            return true;
        }

        if(currentNode.data <= min || currentNode.data > max){
            return false;
        }

        return (this.isBSTHelper(currentNode.left, min, currentNode.data) && this.isBSTHelper(currentNode.right, currentNode.data, max))
    }

}

const bst = new BST();

bst.insert(10);
bst.insert(8);
bst.insert(1);
bst.insert(11);
bst.insert(12);
bst.insert(13);

bst.delete(10);

console.log(bst.isBST());

// console.log(bst.contains(13));

// bst.postOrder();

console.log(bst.findClosest(9));