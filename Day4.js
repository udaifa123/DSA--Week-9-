//////////////////////////////////////////////////////////////////////////////
//✅ 1. Cycle Detection (Undirected Graph – DFS)

// function hasCycleUndirected(graph){
//     let visited=new Set()

//     function dfs(node,parent) {
//         visited.add(node)

//         for(let nei of graph[node]) {
//             if(!visited.has(nei)) {
//                 if(dfs(nei,node)) return true
//             }else if (nei !== parent){
//                 return true
//             }
//         }

//         return false
//     }

//     for(let node in graph) {
//         if(!visited.has(node)) {
//             if(dfs(node,null)) return true
//         }
//     }

//     return false
// }

// let graph={
//     A:["B"],
//     B:["A","C"],
//     C:["B","D"],
//     D:["C","B"]
// }

// console.log(hasCycleUndirected(graph))




////////////////////////////////////////////////////////////////////
//✅ 2. Cycle Detection (Directed Graph)

// function hasCycleDirected(graph){
//     let visited=new Set()
//     let recStack=new Set()

//     function dfs(node) {
//         visited.add(node)
//         recStack.add(node)

//         for(let nei of graph[node]) {
//             if(!visited.has(nei)) {
//                 if (dfs(nei)) return true
//             }else if (recStack.has(nei)) {
//                 return true
//             }
//         }

//         recStack.delete(node)
//         return false
//     }

//     for(let node in graph) {
//         if(!visited.has(node)) {
//             if(dfs(node)) return true
//         }
//     }

//     return false
// }

// let graph={
//     A:["B"],
//     B:["C"],
//     C:["A"]
// }

// console.log(hasCycleDirected(graph))






/////////////////////////////////////////////////////////////////////
//✅ 3. Connected Components

// function countComponents(graph) {
//     let visited=new Set()
//     let count=0

//     function dfs(node){
//         visited.add(node)

//         for(let nei of graph[node]) {
//             if(!visited.has(nei)) {
//                 dfs(nei)
//             }
//         }
//     }

//     for(let node in graph) {
//         if(!visited.has(node)) {
//             dfs(node)
//             count++
//         }
//     }

//     return count
// }

// let graph={
//     A:["B"],
//     B:["A"],
//     C:["D"],
//     D:["C"],
//     E:[]
// }

// console.log(countComponents(graph))




////////////////////////////////////////////////////////////////////////////
//✅ 4. Number of Islands (GRID – DFS)

// function numIslands(grid) {
//   let rows = grid.length;
//   let cols = grid[0].length;
//   let count = 0;

//   function dfs(r, c) {
//     if (
//       r < 0 || c < 0 ||
//       r >= rows || c >= cols ||
//       grid[r][c] === "0"
//     ) return;

//     grid[r][c] = "0"; 

//     dfs(r + 1, c);
//     dfs(r - 1, c);
//     dfs(r, c + 1);
//     dfs(r, c - 1);
//   }

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (grid[i][j] === "1") {
//         dfs(i, j);
//         count++;
//       }
//     }
//   }

//   return count;
// }


// let grid = [
//   ["1","1","0"],
//   ["1","0","0"],
//   ["0","1","1"]
// ];

// console.log(numIslands(grid)); 




///////////////////////////////////////////////////////////////////////////
//✅ 5. Number of Islands (BFS Version)

function numIslands(grid) {
    let rows=grid.length
    let cols=grid[0].length
    let count=0

    let dirs=[[1,0],[-1,0],[0,1],[0,-1]]

    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            
            if(grid[i][j]==="1") {
                count++

                let queue=[[i,j]]
                grid[i][j]="0"

                while(queue.length) {
                    let [r,c]=queue.shift()

                    for(let [dr,dc] of dirs) {
                        let nr=r+dr
                        let nc=c+dc

                        if(
                            nr>=0 && nc>=0 &&
                            nr<rows && nc<cols &&
                            grid[nr][nc]==="1"
                        ){
                            grid[nr][nc]="0"
                            queue.push([nr,nc])
                        }
                    }
                }
            }
        }
    }
    return count
}

let grid1 = [
  ["1","1","0"],
  ["1","0","0"],
  ["0","1","1"]
];

console.log(numIslands(grid1));