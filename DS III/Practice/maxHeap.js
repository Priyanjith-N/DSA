class MaxHeap{
    constructor(arr) {
        this.heap = arr;
        this.buildMaxHeap();
    }

    buildMaxHeap(){
        for(let i = this.parent(this.heap.length - 1);i>=0;i--){
            this.shiftDown(i);
        }
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

            if(this.heap[shiftIdx] > this.heap[parentIdx]){
                this.swap(parentIdx, shiftIdx);
                parentIdx = shiftIdx;
                leftIdx = this.leftChild(parentIdx);
            }else{
                break;
            }
        }
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    display(){
        console.log(this.heap);
    }

    insert(data){
        this.heap.push(data);
        this.shiftUp(this.heap.length - 1);
    }

    shiftUp(currentIdx){
        let parentIdx = this.parent(currentIdx);

        while(parentIdx >= 0){
            if(this.heap[parentIdx] < this.heap[currentIdx]){
                this.swap(currentIdx, parentIdx);
                currentIdx = parentIdx;
                parentIdx = this.parent(currentIdx);
            }else{
                break;
            }
        }
    }

    remove(){
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.shiftDown(0);
    }
}

const arr = [6, 1, 23, 0, 5,  3];

const maxHeap = new MaxHeap(arr);

maxHeap.insert(56);

maxHeap.remove();

maxHeap.display();