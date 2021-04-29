/**
 * 
 * @Class [Դաս] սահմանում է այն կառուցվածքն ու պահվածքը (տվյալներ և կոդ), որն օգտագործվելու է օբյեկտների կողմից։ Բնութագրում է օբեկտը։
 * 
 * @Class -ը հանդիսանում է ելակետային կոդի տերմինալոգիայով նկարագրված, դեռ գոյություն չունեցող @Object -ի մոդել։ 
 * Փաստացի այն նկարագրում է @Object -ի կառուցվածքը, հանդիսանալով նրա «գծագիրը»։ Տրված @Class -ի յուրաքանչյուր @Object պարունակում է
 * այդ @Class -ի կողմից սահմանված կառուցվածքը և պահվածքը։ Հենց այս պատճառով էլ, երբեմն, @Object -ներին անվանում են @Class -ի նմուշներ։
 * Այսպիսով, @Class -ը հանդիսանում է տրամաբանական կառուցվածքը, իսկ @Object -ը՝ նրա ֆիզիկական մարմնավորումը։
 * 
 * @Fragile_Base_Class Problem
 */

/**
  * @Class Այն ավելացվել է ECMAScript 2015: JavaScript-ում @Class իրենից ներկայացնում է "հատուկ" ֆունկցիա, "syntactic sugar" որը իր հերթին քողարկում է 
  * @prototype_inheritance նախատիպիային ժառանգումը։ Պարզապես հարմարավետ է և նման է այլ լեզուներւոմ օգտագործվող @Class -ին։
  * 
  * @hoisting
  * @class_Declarations
  * @Class_Expressions
  * @constructor
  * @extends
  * @super @set @get @this @new
  * @mix_ins
  */
class Class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// mix_ins
let mixin = Base => class extends Base {
        calc() { }
    },
    randomMixin = Base => class extends Base {
        randomize() { }
    };

class Mars { }
class Demos extends mixin(randomMixin(Mars)) { }

/**
 * @Object Հաշվողական համակարգի հասցեային տիրույթի իմաստային հատված է, որը առաջանում է @Class -ի օրինակ (object) ստեղծելիս։
 * 
 * @Object_assign @Object_create @Object_defineProperty @Object_freeze @Object_getOwnPropertyDescriptor @Object_observe ...
 */

const obj = {};

const Person = { 
    firstName: "Hermann ", 
    lastName: "Hesse", 
    age: 80,
    book: "The Glass Bead Game", 
    getFullName: function () { 
        return this.firstName + ' ' + this.lastName 
    }
};