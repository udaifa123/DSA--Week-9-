////////////////////////////////////////////////////////////
//✅ 1. Topological Sort (Kahn’s Algorithm – BFS)

// function topoSort(n,edges) {
//     let adj=Array.from({length:n},()=>[])
//     let indegree=new Array(n).fill(0)

//     for(let[u,v]of edges) {
//         adj[u].push(v)
//         indegree[v]++
//     }

//     let queue=[]
//     for(let i=0;i<n;i++) {
//         if(indegree[i]===0) queue.push(i)
//     }
    
    
//     let result=[]

//     while(queue.length) {
//         let node=queue.shift()
//         result.push(node)

//         for(let nei of adj[node]) {
//             indegree[nei]--
//             if(indegree[nei]===0) {
//                 queue.push(nei)
//             }
//         }
//     }

//     return result.length===n?result:[]
// }

// let n=4
// let edges=[[0,1],[0,2],[1,3],[2,3]]

// console.log(topoSort(n,edges))




////////////////////////////////////////////////////////////////////////////
//✅ 2. Course Schedule (Cycle Detection in DAG)

// function canFinish(numCourses,prerequisites) {
//     let adj=Array.from({length:numCourses},()=>[])
//     let indegree=new Array(numCourses).fill(0)

//     for(let[a,b] of prerequisites) {
//         adj[b].push(a)
//         indegree[a]++
//     }

//     let queue=[]
//     for(let i=0;i<numCourses;i++) {
//         if(indegree[i]===0) queue.push(i)
//     }

//     let count=0

//     while(queue.length) {
//         let node=queue.shift()
//         count++

//         for(let nei of adj[node]) {
//             indegree[nei]--
//             if(indegree[nei]===0) queue.push(nei)
//         }
//     }

//     return count===numCourses
// }

// console.log(canFinish(2,[[1,0]]))
// console.log(canFinish(2,[[1,0],[0,1]]))




///////////////////////////////////////////////////////////////////////////
//✅ 3. Shortest Path (Unweighted Graph – BFS)

// function shortestPath(graph,start) {
//     let queue=[[start,0]]
//     let visited=new Set([start])

//     let dist={}

//     while(queue.length) {
//         let [node,d] = queue.shift()
//         dist[node]=d

//         for(let nei of graph[node]) {
//             if(!visited.has(nei)) {
//                 visited.add(nei)
//                 queue.push([nei,d+1])
//             }
//         }
//     }

//     return dist
// }

//  let graph={
//     A:["B","C"],
//     B:["D"],
//     C:["D"],
//     D:[]
//  }

//  console.log(shortestPath(graph,"A"))





///////////////////////////////////////////////////////////////////
//✅ 4. Dijkstra (Basic Version – Weighted Graph)

// function dijkstra(graph, start) {
//   let dist = {};
//   let visited = new Set();

 
//   for (let node in graph) {
//     dist[node] = Infinity;
//   }
//   dist[start] = 0;

//   while (true) {
//     let curr = null;
//     let min = Infinity;

//     for (let node in dist) {
//       if (!visited.has(node) && dist[node] < min) {
//         min = dist[node];
//         curr = node;
//       }
//     }

//     if (curr === null) break;

//     visited.add(curr);

//     for (let [nei, weight] of graph[curr]) {
//       let newDist = dist[curr] + weight;
//       if (newDist < dist[nei]) {
//         dist[nei] = newDist;
//       }
//     }
//   }

//   return dist;
// }


// let graph = {
//   A: [["B",1],["C",4]],
//   B: [["C",2],["D",5]],
//   C: [["D",1]],
//   D: []
// };

// console.log(dijkstra(graph, "A"));




