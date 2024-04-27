class Heap{
    constructor(arr = null){
        this.heap = [];
        if(arr){
            this.heap = arr;
            this.buildHeap();
        }
    }

    parent(i){
        return Math.floor((i - 1) / 2);
    }

    leftChild(i){
        return Math.floor((2 * i) + 1);
    }

    rightChild(i){
        return Math.floor((2 * i) + 2);
    }

    buildHeap(){
        for(let i = 0;i<this.heap.length;i++){
            this.shiftDown(i);
        }
    }

    shiftDown(currentIdx){
        let parentIdx = currentIdx;
        let leftChild = this.leftChild(parentIdx);
        const endIdx  = this.heap.length - 1;

        while(leftChild <= endIdx){
            const rightChild = this.rightChild(parentIdx);
            let shiftIndex;

            if(rightChild <= endIdx && this.heap[leftChild] > this.heap[rightChild]){
                shiftIndex = rightChild;
            }else{
                shiftIndex = leftChild;
            }

            if(this.heap[shiftIndex] < this.heap[parentIdx]){
                this.swap(shiftIndex, parentIdx);
                this.shifUp(parentIdx);
                return;
            }else{
                return;
            }
        }
    }

    shifUp(currentIdx){
        let parentIdx = this.parent(currentIdx);

        while(parentIdx >= 0 && this.heap[parentIdx] > this.heap[currentIdx]){
            this.swap(parentIdx, currentIdx);
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    display(){
        console.log(this.heap);
    }

    insert(value){
        this.heap.push(value);
        this.shifUp(this.heap.length - 1);
    }

    delete(){
        const lastValue = this.heap[this.heap.length - 1];
        console.log(lastValue, this.heap.length - 1);
        this.heap.pop();
        this.heap[0] = lastValue;
        this.buildHeap();
    }
}

const arr = [19,7,0,4,16,8,13,5,6,12,1,10,9,14,3];



const heap = new Heap(arr)

heap.delete()

heap.display();