class Graph{
    constructor(){
        this.map = new Map();
    }

    addVertex(data){
        this.map.set(data, []);
    }

    insert(vertex, edge, isBidirectional){
        if(!this.map.has(vertex)){
            this.addVertex(vertex);
        }

        if(!this.map.has(edge)){
            this.addVertex(edge);
        }

        this.map.get(vertex).push(edge);

        if(isBidirectional){
            this.map.get(edge).push(vertex);
        }
    }

    display(){
        for (const x of this.map.keys()) {
            console.log(x, ": ");
            for(const y of this.map.get(x)){
                console.log(y);
            }
        }
    }
}

const graph = new Graph();

graph.insert(3, 5, true);
graph.insert(3, 4, true);
graph.insert(5, 6, false);

graph.display();