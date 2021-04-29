const user = {
    lastName: 'Alvina',
    firstName: 'Gevorkyan',
    age: '17'
}

/** 
 * @Object_create Ստեղծում է նոր օբեկտ, որը չունի prototype(չկան ավելորդ հատկություններ)
 */
Object.create(null);

/** 
 * @Object_assign Ստեղծում է նոր օբյեկտ՝ պատճենելով բոլոր հատկությունների արժեքները, թիրախավորված օբեկտի մեջ։
 * Object.assign(target, ...sources)
 */

let assign  = { a: 1 }, obj0 = {a: 36}, obj1 = {b: 22}, obj2 = {c: 11};
let copy = Object.assign({}, assign );
let rest = Object.assign( obj0, obj1, obj2);
console.log(copy , rest, obj0 );

/**
 * @Object_defineProperty
 * Object.defineProperty(obj, prop, descriptor)
 * @obj Object, որում ոչոշվում է հատկություննը։
 * @prop Name, որոշվող կամ փոփոխվող հատկության։ 
 * @discriptor "Նկարագրիչ", որոշվող կամ փոփոխվող հատկության։ Լինում են 2 տեսակի`
 * @data (դա հատկություն է, որն ունի արժեք, որը կարող է լինել(չըլինել) գրված) և @acces (դա հատկություն է, որը նկարագրվում է զույգ 
 * ֆունկցիաներով @getter և @setter )
 * @descritor_data =>
 *    @configurable : false, եթե true է, կարելի է հատկությունը փոփոխել և ջնջել օբեկտի պարունակությունը։ 
 *    @enumerable :false, եթե true է, այդհատկությունը օգտագործվում է ցիկլում, տեսանելի է։
 *    @value :undefined, արժեք, կապված հատկության հետ։ Կարող է լինել ցանկացած վավեր JavaScript տիպ։
 *    @writable :false, եթե true է, կարելի է օբեկտի հատկությանը, վերագրում կատարել։
 * @descritor_access => 
 *     @get :undefined, Ֆունկցիայի վերադարձման արժեքը կօգտագործվի որպես հատկության արժեք:
 *     @set :undefined, Ֆունկցիան որպես միակ արգումենտ վերցնում է նոր արժեք։*
 */
const newObject = {};
const newValue = 22;

Object.defineProperty(newObject, 'method', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(newObject) //{ method: 37 }

Object.defineProperty(newObject, 'newValue', {
    get: function() { 
        return newValue;
    },
    set: function(val) { 
        newValue = val;
    },
    enumerable: true,
    configurable: true
});
console.log(newObject.newValue) // 22

/**
 * @Object_defineProperties սահմանում է նոր կամ փոփոխում է առկա հատկությունները, 
 * ուղղակիորեն օբյեկտի վրա, վերադարձնելով այդ օբյեկտը:
 */

/**
 * @Object_freeze Բլոկ է անում օբեկտը։ Սա նշանակում է, որ օբյեկտին չի "թույլատրվում" ավելացնել նոր հատկություններ, 
 * օբյեկտից հանել հին հատկությունները, փոխել առկա հատկությունները կամ փոխել դրանց արժեքները: Օբեկտը դառնում է 
 * անփոփոխ(immutable):
 * 
 * Object.freeze(obj)
 * 
 * @Object_isFrozen որոշում է, թե արդյոք օբեկտը սառեցված է թե ոչ։
 */

const admin = {
    pass: "admin"
}
Object.freeze(admin);
admin.login = 'login'
console.log(admin.login) //undefined

/**
 * @Object_is որոշում է՝ արդյոք երկու արժեք նույն են թե ոչ:
 */

Object.is(null, null); //true   
Object.is('foo', 'bar'); // false

/**
 * @Object_getPrototypeOf Հետ է վերադարձնում [[Prototype]]։
 * 
 * Object.getPrototypeOf(obj)
 */

let proto = {};
let proto1 = Object.create(proto);
Object.getPrototypeOf(proto1) === proto;

/**
 * @Object_keys վերադարձնում է զանգված, բաղկացած օբեկտի @key -ով դասակարգված։
 * Object.keys(obj)
 * 
 * @Object_values վերադարձնում է զանգված, բաղկացած օբեկտի @value -ով դասակարգված։
 * Object.values(obj)
 * 
 * @Object_entries վերադարձնում է զանգված, բաղկացած օբեկտի [ @key , @value ] -ից։
 * Object.entries(obj)
 */

const keys = { 100: 'a', 2: 'b', 7: 'c' };
const value = { a: 'somestring', b: 42, c: false};
const entries = { a: 5, b: 7, c: 9 };
const array = ['y', 'z', 'x'];
console.log(Object.keys(keys), Object.keys(array), ) //[ '2', '7', '100' ] [ '0', '1', '2' ]
console.log(Object.values(value)) //[ 'somestring', 42, false ]
console.log(Object.entries(entries)) // [ [ 'a', 5 ], [ 'b', 7 ], [ 'c', 9 ] ]

/**
 * @hasOwnProperty վերադարձնում է բուլյան ՝ նշելով, թե արդյոք օբեկտին պարունակում է նշված հատկությունը
 * obj.hasOwnProperty(prop)
 */

const hasOwn = new Object();
hasOwn.property = "hasOwnProperty";
console.log(hasOwn.hasOwnProperty("property")) // true

/**
 * @Object_observe Օգտագործվում է օբյեկտի փոփոխությունները ասինխրոն կերպով դիտարկելու համար:
 * Այն ապահովում է փոփոխությունների հոսք ըստ դրանց հաջորդականության:
 * Object.observe(obj, callback)
 */
