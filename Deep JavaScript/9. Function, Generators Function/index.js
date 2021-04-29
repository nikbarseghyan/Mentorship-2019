/**
 * @Function Իրենից ներկայացնում է որոշակի կարգավորումնների հավաքածու որն իր հեթին կատարում է որոշակի գործողություն կամ արժեքների հաշվարկ։
 * @Object է, որը ունի հավելյալ հնարավորություն կանչվել օգտագործվելու համար։
 * 
 * @function_scope
 * @nested_function @multiply_nested_functions
 * 
 * @Function_declarations @Function_expressions @Function_arrow @Function_anonymous
 * @Scope @closure @hoisting @this @return @throw @arguments @garbage_collector
 */

function foo() {
    console.log('Declarations function')
}; // Function_declarations

const foor = function (a, b) {return a * b}; // Function_expressions

const anon = function () { 
    console.log('Anonymous function')
}; // Function_anonymous

const constructorFoo = new Function("a", "b", "return a * b") //  Function_Constructor
constructorFoo(1,2) 

/**
 * Recursive_Function Ֆունկցիա որտ կանչում է ինքն իրեն։ Ստացվում է, որ ռեկուրսիան նման է loop։
 */

function recursive(x) {
    if (x >= 10) return;
    recursive(x + 1); 
}

recursive(3);

/**
 * @Multiply_Nested_Functions Բազմակի ներդրված ֆունկիաների մակարդակներ։
 * @chaining
 */

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1);

/**
 * @Function_Self_Invoking @Immediantely_invoked_function Ինքնականչվող ֆունկցիա
 */

(function () {
    var x = "Hello!!";
})(); // 


/**
 * Չունի իր @this @arguments @super @target : Arrow-ի դեպքում this-ը հղվում է context(մեկ մակարդակ բարձր):
 */

const arrow = (x, y) => x * y; // Function_arrow

let person = {
    name: "Hrant",
    work: () => {
        console.log(`${this.name} is a student`) // ... is a student
    }
}

let person = {
    name: "Mariam",
    work: function () {
        console.log(`${this.name} is a student`) // Mariam is a student
    }
}

/**
 * Կապված function-երը ունեն հետևալ թաքնված հատկությունները։
 * [[BaundTargetFunction]] target
 * [[Call]] ներքին մեթոդ code-ի կապը object-ի հետ։ call(target, baundThis, args)
 * [[BaundingThis]] this
 * [[BaundingArgument]] արժեքների ցուցակ
 */

/**
 * @Function_Generator function* Սա ֆունկցիա է, որը կարող է ֆունկցիաի աշխատանքի ընթացքից դուրս գալ(հետ վերադարձնել արդյունք),
 *  ապա հետո շարունակել ֆունկցիաի աշխատանքը։
 * next()
 * yield
 */

function* foo() {
    var index = 0;
    while (index < 3)
        yield index++;
}

let generator = foo();

console.log(generator.next().value);
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value);