/**
 * @Promise Օբեկտը՝ օգտագործվում է հետաձգված և ասինխրոն հաշվարկների համար:
 *      Այն թույլ է տալիս վարվել ասինխրոն գործողությունների արդյունքների հետ այնպես, կարծես դրանք սինխրոն լինեն։
 *      Ասինխրոն մեթոդի վերջնական արդյունքի փոխարեն, վերադարձվում է ապագայում ինչ-որ պահի՝ ստացված արդյունքը։
 * @Promis_state @pending @fulfilled @rejected @settled
 * @Callback_Hell
 * 
 * new Promise(executor);
 * new Promise(function(resolve, reject) { ... });
 * 
 * .then(onFulfilled, onRejected)
 * .catch(onRejected)
 */

const userURLs = "https://jsonplaceholder.typicode.com/todos/",
    deley = s => new Promise(i => setTimeout(() => i(), s*1000));

function getToDos () {
    return deley(3)
        .then(() => fetch(userURLs))
        .then(res => res.json())
            
}

getToDos()
    .then(data => console.dir(`Data: ${data}`))
    .catch(ex => console.error(`Exception: ${ex}`))

/**
 * @Promise_race 
 * Promise.race(iterable) Մեթոդը հետ է վերադարձնում Promise այն արդյունքով, որն առաջինը կավարտվի Promise-ներից*:
 */

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([p1, p2]).then((value) => {
    console.log(value);
});

/**
 * @Promise_all 
 * Promise.all(iterable) վերադարձնում է Promise, երբ բոլոր Promise-ները որոնք որ փոխանցվել են որպես արգումենտ, կկատարվեն ։ 
 * Վերադարձնում է որպես արդյունք array, Promise-ներից տրված բոլոր արժեքներով: Promise.all-ը սպասում է բոլոր Promise-ների կատարմանը։
 */

let pro1, pro2, pro3;
pro1= Promise.resolve(11);
pro2 = 22;
pro3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hello Promise All");
});

Promise.all([pro1, pro2, pro3]).then(values => {
    console.log(values);
}); // [11, 22, "Hello Promise All"]