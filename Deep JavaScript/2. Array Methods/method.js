const array = [1, 9, 22, 'Valodik', {id: 6, lastName: 'Kalafiori'}, {id: 8, firsname: 'Benjamin'}, ['Srika', 2]];

/**
 * @forEach @callback
 * @currentValue @index @array
 */

array.forEach((item) => {
    // console.log(item , typeof item)
})

/**
 * @map @callback
 * @Return_new_array և ընդունում է 3 արգումենտ։
 * let new_array = arr.map(function callback( currentValue[, index[, array]]) {}[, thisArg])
 */

// const mapMethod = array.map((element, index) => console.log(element , index))

/**
 * @find @callback Եթե ոչինչ չի գտել` @undefined : @element_value
 * Հետ է վերադարձնելու առաջին գտնված էլեմենտը։
 * find vs includes @findIndex return index
 */

const find = array.find(elem => elem.id === 8)
// console.log(find)

/**
 * @filter @callback Ստեղծում է նոր զանգված այն էլեմենտներով որոնք անցնում են ստուգումը։
 * 
 * @every return true/false Ստուգում է զանգվածի բոլոր element-ը բավարարում են պայմանին, եթե այո՝ true
 * @some return true/false Ստուգում է զանգվածի մեկ element-ը բավարարում են պայմանին, եթե այո՝ true
 */

const filter = array.filter((elem) => typeof elem === 'number')
const some = array.some(element => element < 3)
const every = array.every(element => element < 3)
// console.log(filter, some, every)

/**
 * @split String -> Arrsy
*/

const string = "radiophysics 2019"
const strArray = string.split('')
// console.log(strArray)

/**
 * @join Arrsy -> String
*/

const str = [
    'r', 'a', 'd', 'i', 'o',
    'p', 'h', 'y', 's', 'i',
    'c', 's', ' ', '2', '0',
    '1', '9'
]

const arrString = str.join('')
// console.log(arrString)

/**
 * @splice Փոխում է զանգվածի պարունակությունը, հեռացնում կամ ավելացնում է նոր էլեմենտներ։
 * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 * 
 *                        start | deleteCount | change 'Valodik' -> 'Ansun erkira'
*/                      
const splice = array.splice( 3,         1,         'Ansun erkira')
// console.log(array)

/**
 * @flat Հետ է վերադարձնում նոր զանգված, որտեղ բոլոր էլեմենտները ռեկուրսիվ, մեկ մակարդակի վրա են դասվորվում։
 * arr.flat(depth); depth՝ նակարագրում է խորության մակարդակը զանգվածում։ flat(Infinity)
 */

const multyArray = [1,2,3, [4,5,6,7, [8,9,10]]]
const flat = multyArray.flat(3)
// console.log(flat)

/**
 * @reduce @callback 
 * array.reduce(callback[, initialValue])
 * @accumulator @currentValue
 */

const arrNumber = [1, 2, 3, 4];
const result = arrNumber.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(result)

/**
 * @Cope_Array
 * @Array_from @Array_concat
 */

const src = [1,2,3,4,5,6];
let b = [...src] //ES-6 Shallow Copy
let c = src.concat([7])
let copySrc = Array.from(src) //Clone Array