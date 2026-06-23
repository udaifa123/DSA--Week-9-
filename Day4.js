//////////////////////////////////////////////////////////////////////////////
//✅ 1. Cycle Detection (Undirected Graph – DFS)

function hasCycleUndirected(graph){
    let visited=new Set()

    function dfs(node,parent) {
        visited.add(node)

        for(let nei of graph[node]) {
            if(!visited.has(nei)) {
                if(dfs(nei,node)) return true
            }else if (nei !== parent){
                return true
            }
        }

        return false
    }

    for(let node in graph) {
        if(!visited.has(node)) {
            if(dfs(node,null)) return true
        }
    }

    return false
}

let graph={
    A:["B"],
    B:["A","C"],
    C:["B","D"],
    D:["C","B"]
}

console.log(hasCycleUndirected(graph))