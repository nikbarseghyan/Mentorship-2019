/**
 * @OCP The Open Closed Principle.
 * 
 * @Module պետք է բաց լինի ընդարձակման համար բայց փակ փոփոխության։
 */

class Company {
    constructor(public module: string){}
    getModel(){}
}

const rocketShop: Array<Company> = [
    new Company("NASA"),
    new Company("Roscosmos"),
    //Ավելացավ հետագայում։
    new Company("JAXA")
]

const getPrice = (rocket: Array<Company>): string => {
    for( let i = 0; i <rocket.length; i++ ) {
        switch(rocket[i].module) {
            case 'NASA': return '1 000 000';
            case 'Roscosmos': return '2 000 000';
            //Ավելացավ հետագայում։
            case 'JAXA': return '3 000 000';
            default: return 'Not good price';
        }
    }
}

getPrice(rocketShop)

/**
 * @OCP
 */

abstract class RocketPrice {
    abstract getPrice():string;
}

class NASA extends RocketPrice {
    getPrice() {
        return '1 000 000';
    }
}
class Roscosmos extends RocketPrice {
    getPrice() {
        return '2 000 000';
    }
}
class JAXA extends RocketPrice {
    getPrice() {
        return '3 000 000';
    }
}
//Ընդլայնում ենք
const rocketShop2: Array<RocketPrice> = [
    new NASA(),
    new Roscosmos(),
    new JAXA(),
]
//Չենք փոփոխում
const getPrice2 = (rocket: Array<RocketPrice>): string | void => {
    for( let i = 0; i <rocket.length; i++ ) {
            rocket[i].getPrice()
        }
}

getPrice2(rocketShop2);