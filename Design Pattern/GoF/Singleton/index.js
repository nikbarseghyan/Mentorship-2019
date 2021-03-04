/**
 * @Singleton Եզակի օգտագործման(նախագծման ձևանմուշ)
 * Նպատակը։ Սահմանափակվենք օբյեկտի մեկ էքսեմպլիար օգտագործելով։
 * @Class պետք է ունենա 1 էքսեմպլիար։
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%B5%D5%A6%D5%A1%D5%AF%D5%AB_%D6%85%D5%A3%D5%BF%D5%A1%D5%A3%D5%B8%D6%80%D5%AE%D5%B4%D5%A1%D5%B6_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */

const object_1 = { name: 'Hello World' }
const object_2 = { name: 'Hello World' }
object_1 === object_2 //false

////////////////////////////////////////////////! 
let props; // Оգտագործում ենք գլոբալ փոփոխական(որը immutable)։ Բացասական-> որ նրան փոփոխում ենք(mutation)

class Msg {
    constructor(){
        if(!props) props = this;
        props.count = 0;
        return props;
    }

    getCount(){
        return props.count
    }

    addCount(){
        return props.count++
    }
}
const instensMsg_1 = new Msg();
const instensMsg_2 = new Msg();
instensMsg_1.addCount()
instensMsg_1.addCount()
instensMsg_2.addCount()
instensMsg_2.addCount()
console.log(instensMsg_1.getCount(), instensMsg_2.getCount()) //Return 4,4 Արդյունքում 2-ել հղվում են Msg-ի:
////////////////////////////////////////////////! 
class Foo {
    constructor(){
        if(typeof Foo.state === 'object'){
            return Foo.state
        }
        this.count = 0;
        Foo.state = this.count;
        return this;
    }
    getCount(){
        return this.count
    }

    addCount(){
        return this.count++
    }
}
const instensMsg_3 = new Foo();
const instensMsg_4 = new Foo();
instensMsg_3.addCount()
instensMsg_3.addCount()
instensMsg_4.addCount()
instensMsg_4.addCount()
console.log(instensMsg_3.getCount(), instensMsg_4.getCount()) //Return 2, 2