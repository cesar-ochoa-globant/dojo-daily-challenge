function dijkstra(graph, start, end) {
    const n = graph.length;
    const distance = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    const parent = new Array(n).fill(-1);
    
    distance[start] = 0;

    for (let i = 0; i < n; i++) {
        let minDist = Infinity;
        let minVertex = -1;
        
        for (let v = 0; v < n; v++) {
            if (!visited[v] && distance[v] < minDist) {
                minDist = distance[v];
                minVertex = v;
            }
        }
        
        visited[minVertex] = true;

        for (let v = 0; v < n; v++) {
            if (graph[minVertex][v] > 0 && !visited[v] && distance[v] > distance[minVertex] + graph[minVertex][v]) {
                distance[v] = distance[minVertex] + graph[minVertex][v];
                parent[v] = minVertex;
            }
        }
    }
    
    const path = [];
    let current = end;
    while (current !== -1) {
        path.unshift(current);
        current = parent[current];
    }
    
    return path;
}

const graph = [
    [0, 2, 6, 0, 0, 0, 0],
    [2, 0, 0, 5, 0, 0, 0],
    [6, 0, 0, 8, 0, 0, 0],
    [0, 5, 8, 0, 10, 15, 0],
    [0, 0, 0, 10, 0, 6, 2],
    [0, 0, 0, 15, 6, 0, 6],
    [0, 0, 0, 0, 2, 6, 0]
];
const startNode = 0;
const endNode = 6;
const shortestPath = dijkstra(graph, startNode, endNode);
console.log("The shortest path is through these nodes:", shortestPath.join(" -> "));
