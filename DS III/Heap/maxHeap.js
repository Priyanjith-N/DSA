class MaxHeap{
    constructor(arr) {
        this.heap = [];
        if(arr){
            this.buildHeap(arr);
        }
    }

    buildHeap(arr){
        this.heap = arr;
        for(let i = this.parent(this.heap.length - 1);i>=0;i--){
            this.shiftDown(i);
        }
    }

    shiftDown(parentIdx){
        const endIdx = this.heap.length - 1;
        let leftIdx = this.leftChild(parentIdx);
        while(leftIdx <= endIdx){
            let shiftIdex;
            const rightIdex = this.rightChild(parentIdx);

            if(rightIdex <= endIdx && this.heap[leftIdx] < this.heap[rightIdex]){
                shiftIdex = rightIdex;
            }else{
                shiftIdex = leftIdx;
            }

            if(this.heap[shiftIdex] > this.heap[parentIdx]){
                this.swap(shiftIdex, parentIdx);
                parentIdx = shiftIdex;
                leftIdx = this.leftChild(parentIdx);
            }else{
                return;
            }
        }
    }

    shiftUp(currentIdx){
        let parentIdx = this.parent(currentIdx);

        while(parentIdx >= 0 && this.heap[parentIdx] < this.heap[currentIdx]){
            this.swap(parentIdx, currentIdx)
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }

    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    display(){
        console.log(this.heap);
    }

    delete(){
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.shiftDown(0);
    }

    peek(){
        return this.heap[0];
    }

    swap(i, j){
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
}

const arr = [32, 6, 41, 22, 63, 7, 30, 1];

const heap = new MaxHeap(arr);

// heap.delete();

// heap.insert(24);

heap.display()