/////////////////////////////////////////////////////////////////////
//✅ 1. Recursive DFS

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

//     dfsRecursive(start){
//         let visited=new Set()
//         let result=[]

//         const dfs=(node)=>{
//             if(!node) return

//             visited.add(node)
//             result.push(node)

//             for(let nei of this.adjList[node]) {
//                 if(!visited.has(nei)) {
//                     dfs(nei)
//                 }
//             }
//         }

//         dfs(start)
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

// console.log(g.dfsRecursive("A"))





////////////////////////////////////////////////////////////////
//✅ 2. Iterative DFS (Using Stack)

// function dfsIterative(graph,start){
//     let stack=[start]
//     let visited=new Set()
//     let result=[]

//     while(stack.length){
//         let node=stack.pop()

//         if(!visited.has(node)) {
//             visited.add(node)
//             result.push(node)

//             for(let nei of graph[node]){
//                 stack.push(nei)
//             }
//         }
//     }

//     return result
// }

// let graph={
//     A:["B","C"],
//     B:["D"],
//     C:[],
//     D:[]
// }

// console.log(dfsIterative(graph,"A"))





////////////////////////////////////////////////////////////////////////////////
//✅ 3. DFS Path

// function dfsPath(graph,start,target){
//     let visited=new Set()

//     function dfs(node,path){
//         if(node===target) return path

//         visited.add(node)

//         for(let nei of graph[node]) {
//             if(!visited.has(nei)) {
//                 let res=dfs(nei,[...path,nei])
//                 if(res) return res
//             }
//         }

//         return null
//     }

//     return dfs(start,[start])
// }

// let graph={
//     A:["B","C"],
//     B:["D"],
//     C:[],
//     D:[]
// }

// console.log(dfsPath(graph,"A","D"))