/**
 * @Visitor
 * Ավելացնւոմ է նոր ֆունկցիոնալ արդեն գոյություն ունեցող @class չըփոխելով սկզբնական կոդը։ Ընդլանում է @class -ի ֆունկցիոնալը։ @Mixin
 */
class BMW0 {
    info() {
        return 'BMW car!';
    }
    accept(visitor) {
        visitor(this);
    }
}
class Audi0 {
    info() {
        return 'Audi car!';
    }
    accept(visitor) {
        visitor(this);
    }
}
//////////////////////////////////!

class Car {
    accept(visitor) {
        visitor(this);
    }
}

class BMW extends Car {
    info() {
        return 'BMW car!';
    }
}
class Audi extends Car {
    info() {
        return 'Audi car!';
    }
}

function exportVisitor(car) {
        if (car instanceof BMW){
            car.export = console.log(`Exported data: ${car.info()}`);
        }
        if (car instanceof Audi) {
            car.export = console.log(`Exported data: ${car.info()}`);
        }
}
////////////////////////////////////!  
const bmw = new BMW()
console.log(bmw.accept(exportVisitor))