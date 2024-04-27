class MaxHeap{
    constructor(arr){
        this.heap = arr;
        this.n = arr.length;
        this.buildHeap();
    }

    buildHeap(){
        for(let i = this.parent(this.heap.length - 1); i >= 0; i--){
            this.shiftDown(i);
        }
    }   

    shiftDown(parentIdx){
        const endIdx = this.n - 1;
        let leftIdx = this.leftChildIdx(parentIdx);
        while(leftIdx <= endIdx){
            let shiftIdx;
            const rightIdx = this.rightChildIdx(parentIdx);
            if((rightIdx <= endIdx) && (this.heap[rightIdx] > this.heap[leftIdx])){
                shiftIdx = rightIdx;
            }else{
                shiftIdx = leftIdx;
            }

            if(this.heap[parentIdx] < this.heap[shiftIdx]){
                this.swap(parentIdx, shiftIdx);
                parentIdx = shiftIdx;
                leftIdx = this.leftChildIdx(parentIdx);
            }else{
                return;
            }
        }
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    parent(i){
        return Math.floor((i - 1) / 2);
    }

    leftChildIdx(i){
        return ((2 * i) + 1);
    }

    rightChildIdx(i){
        return ((2 * i) + 2);
    }

    heapSort(){
        for(let i = 0;i<this.heap.length;i++){
            this.swap(0, (this.n - 1));
            this.n--;
            this.shiftDown(0);
        }
        this.n = this.heap.length;
    }
}

const arr = [32, 6, 41, 22, 63, 7, 30, 1];

const maxHeap = new MaxHeap(arr);

maxHeap.heapSort();

console.log(maxHeap.heap);