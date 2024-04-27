class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let current = this.root;
        const newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return;
        }

        while(true){
            if(data > current.data){
                if(!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }else{
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
        }
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

    search(data){
        let currentNode = this.root;
        if(!currentNode){
            return console.log('Tree is empty');
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

    delete(data){
        this.deleteHelper(data, this.root, null);
    }

    deleteHelper(data, currentNode, parentNode){
        while(currentNode){
            if(data > currentNode.data){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }else if(data < currentNode.data){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }else{
                if(currentNode.left && currentNode.right){
                    currentNode.data = this.getMinValue(currentNode.right);
                    parentNode = currentNode;
                    this.deleteHelper(currentNode.data, currentNode.right, parentNode);
                }else{
                    if(!currentNode.left && !currentNode.right){
                        if(parentNode.left === currentNode){
                            parentNode.left = null;
                        }else{
                            parentNode.right = null;
                        }
                    }else{
                        if(!parentNode){
                            if(currentNode.left){
                                this.root = currentNode.left;
                            }else{
                                this.root = currentNode.right;
                            }
                        }else{
                            if(currentNode.left){
                                if(parentNode.left === currentNode){
                                    parentNode.left = currentNode.left;
                                }else{
                                    parentNode.right = currentNode.left;
                                }
                            }else{
                                if(parentNode.left === currentNode){
                                    parentNode.left = currentNode.right;
                                }else{
                                    parentNode.right = currentNode.right;
                                }
                            }
                        }
                    }
                }
                break;
            }
        }
    }

    getMinValue(node){
        if(!node.left){
            return node.data;
        }

        return this.getMinValue(node.left);
    }

    isBST(){
        const isBst = this.isBSTHelper(this.root);
        console.log(isBst);
    }

    isBSTHelper(curretnNode){
        if(!curretnNode){
            return true;
        }

        if(curretnNode.left && curretnNode.left.data > curretnNode.data){
            return false;
        }
        if(curretnNode.right && curretnNode.right.data < curretnNode.data){
            return false;
        }
        const isLeftBST = this.isBSTHelper(curretnNode.left);
        const isRightBST = this.isBSTHelper(curretnNode.right);

        if(isLeftBST && isRightBST){
            return true;
        }else{
            return false;
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(14);
bst.insert(13);

bst.delete(3);

// bst.inOrder();

bst.isBST();
