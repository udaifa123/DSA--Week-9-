/////////////////////////////////////////////////////////////////////////
//✅ 1. BFS Traversal

// class Graph{
//     constructor(){
//         this.adjList={}
//     }

//     addVertex(v){
//         if(!this.adjList[v]) this.adjList[v]=[]
//     }

//     addEdge(v1,v2){
//         this.adjList[v1].push(v2)
//         this.adjList[v2].push(v1)
//     }

//     bfs(start) {
//         let queue=[start]
//         let visited=new Set()
//         let result=[]

//         visited.add(start)

//         while(queue.length){
//             let node=queue.shift()
//             result.push(node)

//             for(let neighbor of this.adjList[node]) {
//                 if(!visited.has(neighbor)) {
//                     visited.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }

//         return result
//     }
// }

// let g=new Graph()

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")

// g.addEdge("A","B")
// g.addEdge("A","C")
// g.addEdge("B","D")

// console.log(g.bfs("A"))





///////////////////////////////////////////////////////////////////
//✅ 2. BFS Level Order

// function bfsLevel(graph,start){
//     let queue=[start]
//     let visited=new Set([start])

//     while(queue.length){
//         let size=queue.length
//         let level=[]

//         for(let i=0;i<size;i++){
//             let node=queue.shift()
//             level.push(node)

//             for(let nei of graph[node]) {
//                 if(!visited.has(nei)) {
//                     visited.add(nei)
//                     queue.push(nei)
//                 }
//             }
//         }

//         console.log(level)
//     }
// }

// let graph={
//     A:["B","C"],
//     B:["D"],
//     C:[],
//     D:[]
// }

// bfsLevel(graph,"A")




//////////////////////////////////////////////////////////////////////////
//✅ 3. Shortest Path (Unweighted Graph)

// function shortestPath(graph,start,target){
//     let queue=[[start,0]]
//     let visited=new Set([start])

//     while(queue.length){
//         let [node,dist]=queue.shift()

//         if(node===target) return dist

//         for(let nei of graph[node]) {
//             if(!visited.has(nei)) {
//                 visited.add(nei)
//                 queue.push([nei,dist+1])
//             }
//         }
//     }

//     return -1
// }

// let graph={
//     A:["B","C"],
//     B:["D"],
//     C:["D"],
//     D:[]
// }

// console.log(shortestPath(graph,"A","D"))





///////////////////////////////////////////////////////////////////////////////
//✅ 4. BFS Using Matrix

function bfsMatrix(matrix,start){
    let queue=[start]
    let visited=new Set([start])

    while(queue.length) {
        let node=queue.shift()
        console.log(node)

        for(let i=0;i<matrix[node].length;i++) {
            if(matrix[node][i]=== 1 && !visited.has(i)) {
                visited.add(i)
                queue.push(i)
            }
        }
    }
}

let matrix=[
    [0,1,1],
    [1,0,1],
    [1,1,0]
]

bfsMatrix(matrix,0)