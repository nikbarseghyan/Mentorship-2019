/**
 * Ամենա կարճ ճանապարհը գռաֆի գագաթների միջև։
 * Խնդիր՝
 */ 
const graph = {}
graph.a = {b: 2 , c: 1}
graph.b = {f: 7}
graph.c = {d: 5 , e: 2}
graph.d = {f: 1}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

const pathGraph = (graph, start, end) => {
    const costs = {}, processed = [];
    let neighbors = {};
    Object.keys(graph).forEach(node => {
        if(node !== start) {
            let val = graph[start][node]
            costs[node] = val || 100_000_000
        }
    })
    
    let node = searchMinCosts(costs, processed)
    while(node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(board => {
            let newCost = cost + neighbors[board]
            if(newCost < costs[board]) {
                costs[board] = newCost
            }
        })
        processed.push(node)
        node = searchMinCosts(costs, processed)
    }
    return costs
}

const searchMinCosts = (costs, processed) => {
    let low = 100_000_000, lowNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if(cost < low && !processed.includes(node)) {
            low = cost
            lowNode = node
        }
    })
    return lowNode
}


console.log(pathGraph(graph, 'a', 'g'));