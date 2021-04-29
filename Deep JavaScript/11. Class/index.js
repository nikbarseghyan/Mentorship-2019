/**
 * @Class
 * @Javascrip -ում @Class հայտնվել են @ECMAScript_2015 և իրենցից ներկայացնում են սինտաքսային կոնստրուկտ հիմնաված @prototype_inheritenc վրա։
 * Code-ի ֆրագմենտ է որը նկարագրում է ինչ-որ @object : 
 * Դա հատուկ ֆունկցիա է։ @class_declarations @class_expressions
 * @new ստեղծում է @Object -ի էքզեմպլիար։
 * @extends Ընդլայնում(ժառանգում) է մեկ այլ @Class -ի հատկությունները։
 * @constructor Հատուկ մեթոդ է որը ծառայում է @Object -ի ստեղծման և դրա initialization համար։ Իրենից ներկայացնում է սովորական ֆունկցիա և
        @Class -ում հայտարարվում է մեկ անգամ։
 * @method Ֆունկցիոնալ վարքագիծ որը նկարագրում է @Class -ը։
 * @super Իր ծնողի @constructor -ն է կանչում։
 * @set @get setter/getter Ինֆորմացիա են վերցնում և ստանում։
 * @static Ծառայում են որպես օգնական ֆունկցիա և հնարավոր չէ կանչել նրան արտաքին միջավայրից։
 */

class Foo {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }
}

const Boo = class Booo{
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }
}



//extends ES 5
classA.prototype = Object.create(classB)

class Example extends Foo {
    constructor() {
        super()
    }
}

function Luzer(fullName) {
    this.fullName = fullName
}

Luzer.prototype.getFullName = function () {
    return this.fullName
}

const user = new Luzer('Albert Einstein')