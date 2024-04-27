class RiverGraph{
    checkRiverSize(matrix){
        const visited = new Array(matrix.length);
        for(let i = 0;i<matrix.length;i++){
            const row = new Array(matrix[0].length).fill(false);
            visited[i] = row;
        }

        const sizes = new Array();

        for(let i = 0;i<matrix.length;i++){
            for(let j = 0;j<matrix[0].length;j++){
                if(visited[i][j]){
                 continue;   
                }else{
                    this.traverseThroughRiver(i, j, matrix, visited, sizes);
                }
            }
        }
        return sizes;
    }

    traverseThroughRiver(i, j, matrix, visited, sizes){
        let currentRiverSize = 0;
        const nodesToExplore = new Array();
        nodesToExplore.push([i, j]);

        while(nodesToExplore.length){
            const currentNode = nodesToExplore.pop();
            i = currentNode[0];
            j = currentNode[1];
            if(visited[i][j]){
                continue;
            }
            
            visited[i][j] = true;

            if(matrix[i][j] === 0){
                continue;
            }

            currentRiverSize++;

            const nearest = this.getNearestNodes(i, j, matrix, visited);
            
            for(let k = 0;k<nearest.length;k++){
                nodesToExplore.push(nearest[k]);
            }
        }
        if(currentRiverSize > 0){
            sizes.push(currentRiverSize);
        }
    }

    getNearestNodes(i, j, matrix, visited){
        const nearest = new Array();
        if(i > 0 && !visited[i - 1][j]){
            nearest.push([i - 1, j]);
        }

        if(i < matrix.length - 1 && !visited[i + 1][j]){
            nearest.push([i + 1, j]);
        }

        if(j > 0 && !visited[i][j - 1]){
            nearest.push([i, j - 1]);
        }

        if(j < matrix[0].length - 1 && !visited[i][j + 1]){
            nearest.push([i, j + 1]);
        }
        return nearest;
    }
}

const matrix = [
                    [1, 0, 0, 1, 1],
                    [0, 1, 1, 1, 0],
                    [0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1]
                ];

const graph = new RiverGraph();

const lakeLength = graph.checkRiverSize(matrix);

console.log(lakeLength);