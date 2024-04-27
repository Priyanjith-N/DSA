class Node{
    constructor(data){
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
        let currentNode = this.root;

        if(!currentNode){
            this.root = new Node(data);
            return;
        }

        while(true){
            if(currentNode.data > data){
                if(!currentNode.left){
                    currentNode.left = new Node(data);
                    break;
                }else{
                    currentNode = currentNode.left;
                }
            }else{
                if(!currentNode.right){
                    currentNode.right = new Node(data);
                    break;
                }else{
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(data){
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.data === data){
                return true;
            }

            if(data < currentNode.data){
                currentNode = currentNode.left;
            }

            if(data > currentNode.data){
                currentNode = currentNode.right; 
            }
        }
        return false;
    }

    delete(data){
        this.deleteHelper(data, this.root, null);
    }

    deleteHelper(data, currentNode, parentNode){
        while(currentNode){
            if(data < currentNode.data){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }else if(data > currentNode.data){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }else{
                if(currentNode.left && currentNode.right){
                    currentNode.data = this.getMinValue(currentNode.right); 
                    this.deleteHelper(currentNode.data, currentNode.right, currentNode);
                }else{
                    if(!parentNode){
                        if(currentNode.left){
                            this.root = currentNode.left;
                        }else{
                            this.root = currentNode.right; 
                        }
                    }else{
                        if(parentNode.left = currentNode){
                            if(!currentNode.right){
                                parentNode.left = currentNode.left;
                            }else{
                                parentNode.left = currentNode.right;
                            }
                        }else{
                            if(!currentNode.right){
                                parentNode.right = currentNode.left;
                            }else{
                                parentNode.right = currentNode.right;
                            }
                        }
                    }
                    break;
                }
            }
        }
    }

    getMinValue(currentNode){
        if(!currentNode.left){
            return currentNode.data;
        }else{
            return this.getMinValue(currentNode.left);
        }
    }

    inOrder(){
        this.inOrderHelper(this.root)
    }

    inOrderHelper(node){
        if(node){
            this.inOrderHelper(node.left);
            console.log(node.data);
            this.inOrderHelper(node.right);
        }
    }

    preOrder(){
        this.preOrderHelper(this.root);
    }

    preOrderHelper(node){
        if(node){
            console.log(node.data);
            this.preOrderHelper(node.left);
            this.preOrderHelper(node.right);
        }
    }

    postOrder(){
        this.postOrderHelper(this.root);
    }

    postOrderHelper(node){
        if(node){
            this.postOrderHelper(node.left);
            this.postOrderHelper(node.right);
            console.log(node.data);
        }
    }

    findClosest(target){
        let currentNode = this.root;
        let closest = currentNode.data;
        while(currentNode){
            if(Math.abs(target - closest) > Math.abs(target - currentNode.data)){
                closest = currentNode.data;
            }

            if(target < currentNode.data){
                currentNode = currentNode.left;
            }else if(target > currentNode.data){
                currentNode = currentNode.right;
            }else{
                break;
            }
        }
        return closest;
    }
}


const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(10); 
binarySearchTree.insert(8); 
binarySearchTree.insert(9);
binarySearchTree.insert(14);
binarySearchTree.insert(12);

// binarySearchTree.delete(4);

// binarySearchTree.search(4);

// console.log(binarySearchTree.search(12));

// console.log(binarySearchTree.findClosest(7));

binarySearchTree.postOrder();

