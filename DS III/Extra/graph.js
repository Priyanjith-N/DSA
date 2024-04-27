class Graph{
    constructor(){
        this.graph = new Map();
    }

    addToGraph(data){
        this.graph.set(data, []);
    }

    insert(vertex, edge, isBidirectional){
        if(!this.graph.has(vertex)){
            this.addToGraph(vertex);
        }

        if(!this.graph.has(edge)){
            this.addToGraph(edge);
        }

        this.graph.get(vertex).push(edge);

        if(isBidirectional){
            this.graph.get(edge).push(vertex);
        }
    }

    display(){
        for(const x of this.graph.keys()){
            console.log(x,": ");
            for(const y of this.graph.get(x)){
                console.log(y);
            }
        }

        console.log(this.graph);
    }

    dfsTraversal(startVertex){
        const isVisted = new Set();
        this.dfs(startVertex, isVisted);

        for(const vertex of this.graph.keys()){
            if(!isVisted.has(vertex)){
                this.dfs(vertex, isVisted);
            }
        }
    }

    dfs(startVertex, isVisted){
        const stack = [startVertex];

        while(stack.length != 0){
            const currentVertex = stack.pop();
            if(!isVisted.has(currentVertex)){
                console.log(currentVertex);
                isVisted.add(currentVertex);
                this.graph.get(currentVertex).forEach(edge => {
                    if(!isVisted.has(edge)){
                        stack.push(edge);
                    }
                });
            }
        }
    }

    bfsTraversal(startVertex){
        const isVisted = new Set();

        for(const vertex of this.graph.keys()){
            if(!isVisted.has(vertex)){
                this.bfs(vertex, isVisted);
            }
        }
    }

    bfs(startVertex, isVisted){
        const queue = [startVertex];
        while(queue.length !== 0){
            const currentVertex = queue.shift();

            if(!isVisted.has(currentVertex)){
                console.log(currentVertex);
                isVisted.add(currentVertex);
                this.graph.get(currentVertex).forEach(edges => {
                    if(!isVisted(edges)){
                        queue.push(edges);
                    }
                });
            }
        }
    }
}

const graph = new Graph();

graph.insert(1, 6, true);
graph.insert(1, 5, true);
graph.insert(5, 2, true);
graph.insert(2, 3, true);
graph.insert(5, 69, false);
graph.insert(33, 44, true);

// graph.display();

graph.bfsTraversal(1);
