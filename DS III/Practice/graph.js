class Graph{
    constructor(){
        this.map = new Map();
    }

    addVertex(data){
        this.map.set(data, new Set());
    }

    insertVertex(vertex, edge, isBidirection){
        if(!this.map.has(vertex)){
            this.addVertex(vertex);
        }

        if(!this.map.has(edge)){
            this.addVertex(edge);
        }

        const edges = this.map.get(vertex);

        if(edges.has(edge)){
            return console.log(`${edge} edge already exists for the vertex ${vertex}`);
        }

        edges.add(edge);

        if(isBidirection){
            const edges = this.map.get(edge);

            if(edges.has(vertex)){
                return console.log(`${vertex} edge already exists for the vertex ${edge}`);
            }

            edges.add(vertex);
        }
    }

    display(){
        for(const x of this.map.keys()){
            console.log(x," : ");
            for(const y of this.map.get(x)){
                console.log(y);
            }
        }
    }

    bfs(startVertex){
        if(!this.map.has(startVertex)){
            return console.log(startVertex, "Vertex not found");
        }

        const isVisited = new Set();

        this.bfsHelper(startVertex, isVisited);

        for(const vertex of this.map.keys()){
            if(!isVisited.has(vertex)){
                this.bfsHelper(vertex, isVisited);
            }
        }
    }

    bfsHelper(startVertex, isVisited){
        const queue = [startVertex];

        while(queue.length){
            const currentVertex = queue.shift();

            if(!isVisited.has(currentVertex)){
                console.log(currentVertex);
                isVisited.add(currentVertex);
                for (const element of this.map.get(currentVertex)) {
                    if(!isVisited.has(element)){
                        queue.push(element);
                    }
                }
            }
        }
    }
    
    dfs(startVertex){
        if(!this.map.has(startVertex)){
            return console.log(startVertex, "Vertex not found");
        }

        const isVisited = new Set();

        this.dfsHelper(startVertex, isVisited);

        for(const vertex of this.map.keys()){
            if(!isVisited.has(vertex)){
                this.dfsHelper(vertex, isVisited);
            }
        }
    }

    dfsHelper(startVertex, isVisited){
        const stack = [startVertex];

        while(stack.length){
            const currentVertex = stack.pop();

            if(!isVisited.has(currentVertex)){
                console.log(currentVertex);
                isVisited.add(currentVertex);
                for(const edge of this.map.get(currentVertex)){
                    if(!isVisited.has(edge)){
                        stack.push(edge);
                    }
                }
            }
        }
    }

    deleteVertex(vertex){
        if(!this.map.has(vertex)){
            return console.log('Vertex not found');
        }

        for(const x of this.map.keys()){
            const edges = this.map.get(x);
            if(edges.has(vertex)){
                edges.delete(vertex);
            }
        }

        this.map.delete(vertex);
    }
}

const graph = new Graph();

graph.insertVertex(3, 2, true);
graph.insertVertex(3, 4, true);
graph.insertVertex(3, 1, true);
graph.insertVertex(6, 1, false);
graph.insertVertex(4, 6, false);
graph.insertVertex(45, 65, false);


graph.deleteVertex(3);

graph.display();

// graph.dfs(3);