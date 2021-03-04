/**
 * @Ժառանգում @Inheritenc
 * Base Class: Inheritenc.
 * Այն գործընթացը, որի ընթացքում մի օբյեկտը ստանում է մեկ այլ օբյեկտի հատկությունները, կոչվում է ժառանգականություն։ 
    Ժառանգականության դեպքում մի օբյեկտը մասնակի կամ ամբողջությամբ ժառանգում է մեկ այլ օբյեկտի հատկությունները, և 
    կարող է ունենալ իրեն բնորոշ հատկությունները։

 * @Inheritenc Problems*
 * 
 */

class Root {
    name: string;
    constructor(name: string){ 
        this.name = name
    }

    rwe(){
        console.log(`${this.name} permision 777 `);
    }
}
class UserOne extends Root {
    status(){
        console.log(`${this.name} permision 655`)
    }
}
class UserTwo extends Root {
    status(){
        console.log(`${this.name} permision 635`)
    }
}

class Admmin {}

const root = new Root('rootik')
root.rwe();

const userOne = new UserOne('Vanessa');
userOne.rwe();
userOne.status();

const userTwo = new UserTwo('Lola');
userTwo.rwe();
userTwo.status();