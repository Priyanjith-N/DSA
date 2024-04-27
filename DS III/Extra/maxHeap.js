class MaxHeap{
    constructor(arr = null){
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
            const rightIdx = this.rightChild(parentIdx);
            let shiftIdx;

            if(rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]){
                shiftIdx = rightIdx;
            }else{
                shiftIdx = leftIdx;
            }

            if(this.heap[parentIdx] < this.heap[shiftIdx]){
                this.swap(parentIdx, shiftIdx);
                parentIdx = shiftIdx;
                leftIdx = this.leftChild(parentIdx);
            }else{
                return;
            }
        }
    }

    shiftUp(currentIdx){
        let parentIdx = this.parent(currentIdx);

        while(parentIdx >= 0){
            if(this.heap[parentIdx] < this.heap[currentIdx]){
                this.swap(parentIdx, currentIdx);
                currentIdx = parentIdx;
                parentIdx = this.parent(currentIdx);
            }else{
                return;
            }
        }
    }

    insert(data){
        this.heap.push(data);
        this.shiftUp(this.heap.length - 1);
    }

    delete(){
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.shiftDown(0);
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

    display(){
        console.log(this.heap);
    }
}

const heap = new MaxHeap();

heap.insert(10);
heap.insert(15);
heap.insert(7);
heap.insert(5);
heap.insert(3);

heap.delete();

heap.display();