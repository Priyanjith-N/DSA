class HeapSort{
    constructor(arr){
        this.heap = arr;
        this.n = arr.length;
        this.buildMaxHeap();
    }

    buildMaxHeap(){
        for(let i = this.parent(this.heap.length - 1);i>=0;i--){
            this.heapfiy(i);
        }
    }

    heapfiy(parentIdx){
        const endIdx = this.n - 1;
        let leftChildIdx = this.leftChildIdx(parentIdx);
        
        while(leftChildIdx <= endIdx){
            let shiftIndex;
            const rightChildIdx = this.rightChildIdx(parentIdx);

            if(rightChildIdx <= endIdx && this.heap[leftChildIdx] < this.heap[rightChildIdx]){
                shiftIndex = rightChildIdx;
            }else{
                shiftIndex = leftChildIdx;
            }

            if(this.heap[shiftIndex] > this.heap[parentIdx]){
                this.swap(shiftIndex, parentIdx);
                parentIdx = shiftIndex;
                leftChildIdx = this.leftChildIdx(parentIdx);
            }else{
                return;
            }
        }
    }

    heapSort(){
        for(let i = 0;i<this.heap.length;i++){
            this.swap(0, this.n - 1);
            this.n--;
            this.heapfiy(0);
        }
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    parent(i){
        return Math.floor(( i - 1) / 2);
    }

    leftChildIdx(i){
        return ((2* i) + 1);
    }

    rightChildIdx(i){
        return ((2* i) + 2);
    }

    display(){
        console.log(this.heap);
    }
}

const arr = [2, 2, 0, 4, 3, 4, 5, 0.2];

const heap = new HeapSort(arr);

heap.heapSort();

heap.display()