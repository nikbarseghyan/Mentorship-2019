/**
 * @V8
 * @Call_Stack դա տվյալների կառուցվածք է, ավելի պարզ՝ գրանցում է տեղեկատվություն այն մասին, թե 
 * որտեղ ենք գտնվում մենք ծրագրում։
 * @Memory_Heap Որտեղ տեղի է ունենում հիշողության բաշխում։
 * 
 * @JavaScript ունի 3 <stack*>(Իրականում 1 հատա, քանի որ JS-ը մեկ հոսքանի լեզու է):
 * ա) Ստանդարտ stack-ը` բոլոր սինխրոն գործողությունների համար։
 * բ) Microtask stack-ը` բոլոր առավել առաջնահերթ ասինխրոն գործողությունների համար:
 * գ) Macrotask stack-ը` բոլոր ոչ այնքան առաջնահերթ ասինխրոն գործողությունների համար:
 * Ստացվւոմ է՝ Stack <-- Microtask <-- Macrotask
 * @Event_Loop աշխատում է այսպես.
 * 1․ Կատարվում են այն գործողությունները որոնք stack-ում են և միայն երբ այն դատարկ է, 
 *  ստուգվում է թե ինչ է կատարվում Microtask-ում։
 * 2․ Microtask սկավում է կատարվել այստեղի գործողությունները(անհրաժեշտության դեպքում), մեկը մյուսի ետևից
 * մինչև միկրո առաջադրանքի հերթը կդատարկվի կամ կպահանջվի կատարման չկատարումը, և այնուհետև միայն ստուգվում է
 * կա արդյոք Macrotask կատարման համար։
 * 3․ Macrotask կկատարվի այն ժամանակ երբ Stack դատարկ լինի և Microtask չըլինի։
 * 
 * Արդյունքում՝ Mico-ն չի կարվի եթե stack-ը դատարկ չի։ Macro չի կարվի եթե կա Mico խնդիր կամ պահանջում է երկար մշակում։
 * @Micro -ն նման է @Macro -ի, բայց ավելի բարձր առաջնահերթությամբ:
 * 
 * @Microtask  process.nextTick , Promises , queueMicrotask , MutationObserver
 * @Macrotask  setTimeout , setInterval , setImmediate , requestAnimationFrame(rAF) , I/O , render UI:
 */

console.log('stack [1]');
setTimeout(() => console.log("macro [2]"), 0);
setTimeout(() => console.log("macro [3]"), 1);

const p = Promise.resolve();

for(let i = 0; i < 3; i++) p.then(() => {
    setTimeout(() => {
        console.log('stack [4]')
        setTimeout(() => console.log("macro [5]"), 0);
        p.then(() => console.log('micro [6]'));
    }, 0);
    console.log("stack [7]");
});

console.log("macro [8]");

// /// /// /////// /// //// //// ///// ////
setTimeout(() => console.log('timer___'))
Promise.resolve().then(() => console.log('promise___'));

// /// /// /////// /// //// //// ///// ////
setImmediate(() => {
    console.log("first --- 1");
}) // Macrotask 3

process.nextTick(() => {
    console.log("second --- 2"); //Microtask 2
})

console.log("third --- 3"); //Stack 1