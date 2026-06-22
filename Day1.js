///////////////////////////////////////////////////////////////////////////////
//✅ 1. Graph using Adjacency List


// class Graph{
//     constructor(){
//         this.adjList={}
//     }

//     addVertex(v){
//         if(!this.adjList[v]){
//             this.adjList[v]=[]
//         }
//     }

//     addEdge(v1,v2){
//         this.adjList[v1].push(v2)
//         this.adjList[v2].push(v1)
//     }

//     print(){
//         console.log(this.adjList)
//     }
// }

// let g=new Graph()

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")

// g.addEdge("A","B")
// g.addEdge("A","C")

// g.print()




//////////////////////////////////////////////////////////////////////////////
//✅ 2. Directed Graph

// class Graph{
//     constructor(){
//         this.adjList={}
//     }

//     addVertex(v){
//         if(!this.adjList[v]) this.adjList[v]=[]
//     }

//     addEdge(v1,v2){
//         this.adjList[v1].push(v2)
//     }
// }

// let g=new Graph()

// g.addVertex("A")
// g.addVertex("B")

// g.addEdge("A","B")

// console.log(g.adjList)





//////////////////////////////////////////////////////////////////////
//✅ 3. Weighted Graph

// class Graph{
//     constructor(){
//         this.adjList={}
//     }

//     addVertex(v){
//         if(!this.adjList[v]) this.adjList[v]=[]
//     }

//     addEdge(v1,v2,weight){
//         this.adjList[v1].push({node:v2,weight})
//         this.adjList[v2].push({node:v1,weight})
//     }
// }

// let g=new Graph()

// g.addVertex("A")
// g.addVertex("B")

// g.addEdge("A","B",5)

// console.log(g.adjList)





//////////////////////////////////////////////////////////
//✅ 4. Adjacency Matrix

// function createMatrix(n){
//     let matrix=[]

//     for(let i=0;i<n;i++){
//         matrix.push(new Array(n).fill(0))
//     }

//     return matrix
// }

// function addEdge(matrix,u,v){
//     matrix[u][v]=1
//     matrix[v][u]=1
// }

// let m=createMatrix(3)

// addEdge(m,0,1)
// addEdge(m,1,2)

// console.log(m)



////////////////////////////////////////////////////////
//✅ 5. Check Edge Exists

// function hasEdge(graph,v1,v2){
//     return graph[v1].includes(v2)
// }

// let g={
//     A:["B","C"],
//     B:["A"],
//     C:["A"]
// }

// console.log(hasEdge(g,"A","B"))







///////////////////////////////////////////////////////////////////////
//✅ 6. Count Vertices & Edges

function countVertices(graph){
    return Object.keys(graph).length
}

function countEdges(graph){
    let count=0

    for(let v in graph){
        count+=graph[v].length
    }

    return count/2
}

let g={
    A:["B"],
    B:["A","C"],
    C:["B"]
}

console.log(countVertices(g))
console.log(countEdges(g))