/**
 * Յուրաքանչուր @Class կամ @Data_Structur որը պահպանում է տվյալներ և ռեալիզացնում է @map մեթոդը անվանում են @Functor 
 * @param {*} i 
 */

class MyFunctor {
    constructor(param) {
        this.param = param;
    }

    map(func){
        return new MyFunctor(func(this.param))
    }
}

const func = i => console.log( i + 1 )
const instens = new MyFunctor(1)
instens.map(func)
///////////////////////////////////////////////////////////
const add1 = (a) => a+1
let myArray = new Array(1, 2, 3, 4)
myArray.map(add1)