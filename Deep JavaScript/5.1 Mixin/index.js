/**
 * @Mixin Այն @Class է, որի մեթոդները նախատեսված են այլ կլասում օգտագործվելու համար, առանց @Mixin -ից ժառանգելու?*:
 * Այլ կերպ ասած, @Mixin -ը որոշում է մեթոդները, որոնք ռեալիզացնելու են հատուկ վարքագիծ։ Մենք չենք օգտագործում mixin-ը ինքնին,
 * օգտագործում ենք այն՝ որպիսզի ավելացնենք հավելյալ ֆունկցիոնալ մեկ այլ @Class -ին։
 * 
 * @extends (Օրինակ՝ class User extends Person{}). class @User կարող է ժառանգել մեկ այլ class @Person -ից, բայց նաև ներառել իր մեջ mixin։
 * 
 * @EventMixin 
 * 
 * Իրադարձությունները - տեղեկատվություն հաղորդող հիանալի միջոց են, նրանց ովքեր դրանով հետաքրքրված են։
 * 
 * Որոշ ծրագրավորման լեզուներ թույլ են տալիս իրականացնել բազմակի ժառանգություն: JavaScript-ը չի օգտագործում(աջակցում) բազմակի ժառանգությանը, 
 * բայց mixin-երի միջոցով մենք կարող ենք նման բան անել(կամ դրա իմիտացիան ստանալ)՝ պատճենելով մեթոդները prototype-ի մեջ: 
 * Դրանով իսկ ընդլայնել class-ի ֆունկցիոնալությունը: @Mixin -ի կիրառումից կարող են կոնֆլիկտներ լինել ոչ խելամիտ օգտագործման դեպքում։
 */

let mixin = {
    getDate() {
        console.log(new Date())
    },

    updateUserName() {
        console.log(this.name)
    } 
}

class User {
    constructor(name) {
        this.name = name
    }
}

Object.assign(User.prototype, mixin); //Կրկնորինակում ենք մեթոդները;
new User('Derenik').updateUserName(); // Սա ժառանգում չէ, այլ մեթոդների կրկնորինակում

/**
 * @EventMixin 
 */

let eventMixin = {
    // menu.on('select', function(item) { ... } Բաժանորդագրվել
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },

    // menu.off('select', handler) Չեղարկել
    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
            handlers.splice(i--, 1);
            }
        }
    },

    // this.trigger('select', data1, data2); Գեներացնել իրադարձություն։
    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) return;
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};

class Subscriber {
    choose(value) {
        this.trigger("select", value);
    }
}

Object.assign(Subscriber.prototype, eventMixin)
let sub = new Subscriber()
sub.on('select', val => console.log(val))
sub.choose('22')