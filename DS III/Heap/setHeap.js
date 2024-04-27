class Heap{
    constructor(arr = null){
        this.heap = [];
        if(arr){
            this.buildHeap(arr);
        }
    }

    buildHeap(arr){
        this.heap = arr;
        for(let i = this.parent(this.heap.length - 1); i >= 0; i--){
            this.shiftDown(i);
        }
    }

    shiftDown(currentIndex){
        const endIdx = this.heap.length - 1;
        let leftIndex = this.leftChild(currentIndex);

        while(leftIndex <= endIdx){
            let shiftIndex;
            const rightIndex = this.rightChild(currentIndex);

            if(rightIndex <= endIdx && this.heap[leftIndex] > this.heap[rightIndex]){
                shiftIndex = rightIndex;
            }else{
                shiftIndex = leftIndex;
            }

            if(this.heap[shiftIndex] < this.heap[currentIndex]){
                this.swap(shiftIndex, currentIndex);
                currentIndex = shiftIndex;
                leftIndex = this.leftChild(currentIndex);
            }else{
                return;
            }
        }
    }

    shiftUp(current){
        let parentIndex = this.parent(current);

        while(parentIndex >= 0 && this.heap[parentIndex] > this.heap[current]){
            this.swap(parentIndex, current);
            current = parentIndex;
            parentIndex = this.parent(current);
        }
    }

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    parent(i){
        return Math.floor((i - 1) / 2);
    }

    leftChild(i){
        return ((2 * i) + 1);
    }

    rightChild(i){
        return ((2 * i) + 2);
    }

    display(){
        console.log(this.heap);
    }

    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    delete(){
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.shiftDown(0);
    }

    peek(){
        return this.heap[0];
    }
}

const arr = [19,7,0,4,16,8,13,5,6,12,1,10,9,14,3];

const heap = new Heap(arr);

heap.insert(-1);

heap.delete();

heap.display();