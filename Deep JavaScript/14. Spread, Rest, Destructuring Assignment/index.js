/**
 * @Spread_syntax թույլ է տալիս ընդլայնել iterable համար տարրերը.
 */
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]; //Array.concat

let obj1 = { moo: 'Mazut Ashot', x: 90 };
let obj2 = { boo: 'Xodovik Garnik', y: 56 };
let merge = {...obj1, ...obj2} // Object.assign()
console.log( merge )

/**
 * @Rest թույլ են տալիս ֆուկցիային, անսահմանափակ թվով արգումենտներ ընդունել որպես զանգված:
 * function(a, b, ...theArgs) {...}
 */

function soo(a, b, ...manyMoreArgs) {
    console.log( a, b);
    console.log("manyMoreArgs", manyMoreArgs);
}
soo("Crassos", "Hanibal", "Napaleo", "Gay Flamini", "Femestokl", "...")

function f(...[a, b, c]) {
    return a + b + c;
}
console.log( f(1), f(1, 2, 3) )

/**
 * @Destructuring_Assignment թույլ են տալիս արդյունքներ հավաքել զանգվածներից կամ օբյեկտներից՝ օգտագործելով syntax:
 */

let aa, bb, rest;
[aa, bb] = [1, 2];
console.log(aa); // 1
console.log(bb); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(aa); // 1
console.log(bb); // 2
console.log(rest); // [3, 4, 5]