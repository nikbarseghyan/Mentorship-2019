/**
 * @Closure Դա ֆունկցիայի է որը ունի հասանելություն, իրենից մեկ մակարդակ բարձր ֆունկցիայի տեսանելության տիրույթ( @Lexical_Environment @Scope ) անգամ այն դեպքում երբ այն արտաքին ֆունկցիայի կանչը ավարտվել է։
 * @Closure տալիս է մեզ հասանելություն արտաքին ֆունկցիայի @Scope -ին նրքին ֆունկցիայից։
 */


function person() {
    let name = 'Gevorik';
    
    return function displayName() {
        return name
        // console.log(name);
    };
}
let a = person();

console.dir( a() )

// personLexicalEnvironment = {
//     environmentRecord: {
//       name : 'Peter',
//       displayName: < displayName function reference>
//     }
//     outer: <globalLexicalEnvironment>
//   }

// displayNameLexicalEnvironment = {
//     environmentRecord: {
//     }
//     outer: <personLexicalEnvironment>
// }

function incrementNum(num) {
    return function(number) {
        return num + number
    }
}

const addOne = incrementNum(2)
console.log(addOne(10))