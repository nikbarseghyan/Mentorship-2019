/**
 * @prototype դա @Object -ի մեթոդների պահեստ է, որը օգտագործվում է որոնման մեջ*, նաև թույլ է տալիս ընդլայնել @Object -ի հատկությունները։
 * Դա այն մեխանիզմն է, որով JavaScript օբյեկտները միմյանցից հատկություններ են ժառանգում:
 * 
 * @prototype_chain
 * Բոլոր @Object -ը ունեն "փակ" հատկություն [[prototype]] == __proto__ որը իրենից ներկայացնում է Link: @Object որի վրա ցույց է տալիս
 *  __proto__ Link-ը, անվանում են prototype։ [[prototype]] դա ներքին հղում է, որը գոյություն ունի որևէ օբեկտի մեջ և հղվում է մեկ այլ օբեկտի։
 * ԵՎ այն օգտագործվում է երբ
 * 
 * ES6-ը առաջարկում է ժառանգման syntax sugar, բայց ներից աշխատում է @prototype_inheritens 
 */


function Person(lastName, ferstName, mp3) {
    this.lastName = lastName
    this.ferstName = ferstName
    this.mp3 = mp3
}

Person.prototype.getInfo = function() {
    return `${this.ferstName} ${this.lastName}, what the hell is music ${this.mp3}, wtf`
}

const taxist = new Person('Ara', 'Xalatyan' , 'Tatoul & Vle - Artasuqs Chi Camaqum')
console.log(taxist.getInfo())