class HeapSort{
    constructor(arr) {
        this.heap = arr;
        this.n = arr.length;
        this.buildMaxHeap();
    }

    buildMaxHeap(){
        for(let i = this.parent(this.heap.length - 1);i>=0;i--){
            this.shifitDown(i);
        }
    }

    shifitDown(parentIdx){
        const endIdx = this.n - 1;
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

    heapSort(){
        for(let i = this.heap.length - 1; i>0;i--){
            this.swap(0, i);
            this.n--;
            this.shifitDown(0);
        }
        this.n = this.heap.length;
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

const arr = [5,23,1, 45, 0, 45,33];

const heapSort = new HeapSort(arr);

heapSort.heapSort();

heapSort.display();