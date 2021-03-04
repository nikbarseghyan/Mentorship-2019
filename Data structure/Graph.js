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

let graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(graph, 1))