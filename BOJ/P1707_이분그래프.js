const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);

let line = 1;

for(let t=0;t<T;t++){
    const [V,E] = input[line].split(' ').map(Number);

    const graph = [];
    for(let i=1;i<=V;i++)graph[i] = [];

    for(let i=1;i<=E;i++){
        const [u,v] = input[line+i].split(' ').map(Number);

        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(V+1).fill(false);
    const dist = new Array(V+1).fill(-1);

    for(let i=1;i<=V;i++){
        if(visited[i])continue;
        bfs(i,graph,visited,dist);
    }
    line+=E+1;

    if(isBinaryGraph(graph,dist))console.log('YES');
    else console.log('NO');
}

function bfs(i,graph,visited,dist){
    const queue = [];
    queue.push(i);
    visited[i]= true;
    dist[i] = 0;

    while(queue.length !== 0){
        const np = queue.shift();

        for(let point of graph[np]){
            if(visited[point])continue;
            queue.push(point);
            visited[point] = true;
            dist[point] = (dist[np] + 1) % 2;
        }
    }
}

function isBinaryGraph(graph,dist){
    for(let i=1;i<dist.length;i++){
        for(let x of graph[i]){
            if(dist[x] === dist[i]) return false;
        }
    }
    return true;
}