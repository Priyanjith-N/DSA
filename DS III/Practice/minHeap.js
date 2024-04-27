class MinHeap{
    constructor(arr){
        this.heap = arr;
        this.buildHeap();
    }

    buildHeap(){
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
        return ((2 * i) + 2)
    }

    shiftDown(parentIdx){
        const endIdx = this.heap.length - 1;
        let leftIdx = this.leftChild(parentIdx);

        while(leftIdx <= endIdx){
            const rightIdx = this.rightChild(parentIdx);
            let shiftIdx;

            if(rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]){
                shiftIdx = rightIdx;
            }else{
                shiftIdx = leftIdx;
            }

            if(this.heap[parentIdx] > this.heap[shiftIdx]){
                this.swap(parentIdx, shiftIdx);
                parentIdx = shiftIdx;
                leftIdx = this.leftChild(parentIdx);
            }else{
                return; // or break
            }
        }
    }

    insert(data){
        this.heap.push(data);
        this.shiftUp(this.heap.length - 1);
    }

    shiftUp(currentIdx){
        let parentIdx = this.parent(currentIdx);

        while(parentIdx >= 0){
            if(this.heap[currentIdx] < this.heap[parentIdx]){
                this.swap(currentIdx, parentIdx);
                currentIdx = parentIdx;
                parentIdx = this.parent(currentIdx);
            }else{
                break;
            }
        }
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    remove(){
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.shiftDown(0);
    }

    display(){
        console.log(this.heap);
    }
}

const arr = [5, 23, 5, 0, 7, 1, -2];

const minHeap = new MinHeap(arr);

minHeap.insert(6)

minHeap.remove();

minHeap.display();