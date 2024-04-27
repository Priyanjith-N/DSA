class MinHeap{
    constructor(arr = null){
        this.heap = new Array();
        if(arr){
            this.buildHeap(arr)
        }
    }

    buildHeap(arr){
        this.heap = arr; 

        for(let i = this.parent(this.heap.length - 1);i>=0;i--){
            this.shiftDown(i);
        }
    }

    shiftDown(currentIndex){
        const endIndex = this.heap.length - 1;
        let leftIndex = this.leftChild(currentIndex);

        while(leftIndex <= endIndex){
            console.log(this.heap);
            const rightIndex = this.rightChild(currentIndex);
            let indexToShift;
            if(rightIndex < endIndex && this.heap[rightIndex] < this.heap[leftIndex]){
                indexToShift = rightIndex;
            }else{
                indexToShift = leftIndex;
            }

            if(this.heap[currentIndex] > this.heap[indexToShift]){
                [this.heap[currentIndex] ,this.heap[indexToShift]] = [this.heap[indexToShift] > this.heap[currentIndex]]
                currentIndex = indexToShift;
                leftIndex = this.leftChild(currentIndex);
            }else{
                return;
            }
        }
    }

    shiftUp(currentIndex){
        let parentIndex = this.parent(currentIndex);
        while(currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]){
            [this.heap[currentIndex] ,this.heap[indexToShift]] = [this.heap[indexToShift] > this.heap[currentIndex]]
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex);
        }
    }

    peek(){ // return top value
        return this.heap[0];
    }

    remove(){ // remove top value
        [this.heap[0] ,this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1] > this.heap[0]]
        this.heap.pop();
        this.shiftDown(0);
    }

    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    parent(i){
        return Math.floor((i - 1) / 2);
    }

    leftChild(i){
        return ((i * 2) + 1);
    }

    rightChild(i){
        return ((i * 2) + 2);
    }

    display(){
        this.heap.forEach(value => console.log(value));
    }
}

const arr = [6,2,8];

const heap = new MinHeap(arr);

heap.display();

console.log(heap.heap);