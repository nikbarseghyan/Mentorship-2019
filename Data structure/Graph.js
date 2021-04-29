/**
 * @Graph or @Network Իրենից ներկայացնում է իրար հետ կապակցված @Collections (Հավաքածուներ).
 * Լինում են 2 տեսակի @Graph ՝ կողմնորոշված և ոչկողմնորոշված։ 
 * @Graph կարող են ներկայացված լինել @List (Ցուցակ) կամ @Matrix (Մատրիցա) տեսքով։
 * @Graph տվյալների կառուցվածք է, որը կազմակերպում է տվյալները` ըստ իր տարրերի հարաբերությունների երկրաչափական տարածքում:
 *      Տարրերը սովորաբար գագաթներ են (գծապատկերի կետերը) և եզրեր (գագաթների միջև եղած կապերը):
 * Եթե ​​գրաֆի գագաթները հնարավոր է հատել միայն մեկ ուղղությամբ (A → B, բայց ոչ B → A), այն կոչվում է ուղղված գրաֆ, 
 * Եթե ​​գագաթները կարող են անցնել ցանկացած ուղղությամբ, ապա այն կոչվում է չուղղորդված գրաֆիկ, 
 * Եթե ​​հնարավոր է անցնել եզրերը և վերադառնալ մեկնարկային գագաթ, այն կոչվում է ցիկլային գրաֆիկ, 
 * Եթե ​​այդպիսի անցումը հնարավոր չէ, այն կոչվում է ացիկլիկ գրաֆիկ.
 * 
 * @bfs (Breath-First-Search, BFS), Փնտրում դեպի լայնություն։
 * @dfs (Depth-First-Search, DFS), Փնտրում դեպի խորություն։
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%B3%D6%80%D5%A1%D6%86%D5%B6%D5%A5%D6%80%D5%AB_%D5%BF%D5%A5%D5%BD%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6
 */

const graph = {}
graph.a = ['b','c']
graph.b = ['f']
graph.c = ['d','e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

// FIFO 
const breadthSearch = (graph, start, end) => {
    let queue = []
    queue.push(start)

    while( queue.length > 0 ) {
        const current = queue.shift()
        if(!queue[current]) graph[current] = []

        if(graph[current].includes(end)) return true
        else queue = [...queue, ...graph[current]]
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'f'))


/**
 * Breath-First-Search, BFS, Փնտրում դեպի լայնություն։
 * @param {*} graph 
 * @param {*} root 
 * @returns 
 */
function bfs(graph, root) {
    let nodesLen = {}
    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity
    }
    nodesLen[root] = 0
    let queue = [root]
    let current
    while (queue.length !== 0) {
        current = queue.shift()

        let curConnected = graph[current]
        let neighborIdx = []
        let idx = curConnected.indexOf(1)
        while (idx !== -1) {
            neighborIdx.push(idx)
            idx = curConnected.indexOf(1, idx + 1)
        }
        for (let i = 0; i < neighborIdx.length; i++) {
            if (nodesLen[neighborIdx[i]] === Infinity) {
                nodesLen[neighborIdx[i]] = nodesLen[current] + 1
                queue.push(neighborIdx[i])
            }
        }
    }
    return nodesLen
}

const _graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(_graph, 1))