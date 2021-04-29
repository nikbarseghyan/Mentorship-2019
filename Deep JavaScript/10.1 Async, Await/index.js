/**
 * @async Հայտարարվում է ասինխրոն ֆունկցիա, որը հետ է վերադարձնում @AsyncFunction օբեկտը. @Promise
 * @await Կանգնեցնում է @async ֆունկցիաի կատարումը և սպասում է փոխանցված @Promise -ի պատասխանին, ապա վերսկսում է async 
 *      գործառույթի կատարումը և վերադարձնում ստացված արժեքը: @await օգտագործվում է միայն @async ֆունկցիաների կոնտեքստում։
 * Ավելի հարմարեցված սինտաքս է ասինխրոն կոդը մշակելու համր։
 */

const userURLs = "https://jsonplaceholder.typicode.com/todos/",
    deley = s => new Promise(i => setTimeout(() => i(), s*1000));

async function asyncFuncToDos() {
    console.log('Async Function');
    try {
        await deley(2);
        const res = await fetch(userURLs),
            data  = await res.json();
        console.dir(`Data: ${data}`);
    } catch (ex) {
        console.error(`Exception: ${ex}`)
    } finally {
        console.log('*_*')
    }
}

asyncFuncToDos()