/**
 * @Abstract_Factory
 * Հավելյալ կարգավորում է որը ղեկավարում է միանման Factory-ին, օգնում է ստեղծել օբեկտներ մինաման կառուցվածքով, բայց տարբեր մուտքային տվյալներով։
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%B1%D5%A2%D5%BD%D5%BF%D6%80%D5%A1%D5%AF%D5%BF_%D6%86%D5%A1%D5%A2%D6%80%D5%AB%D5%AF%D5%A1_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */

 //Abstract Factory
function Car(kind) { 
    console.log(kind) 
    return kind === 'hatchback' ? hatchbackCar: sedanCar;
}
function hatchbackCar() {
    return new MiniCooper();
} 
function sedanCar() {
    return new MercedesBenz();
} 
class MiniCooper {
    about() {
        return `Mini Cooper S is a sports hatchback car.`
    }
}

class MercedesBenz {
    about() {
        return `Mercedes-Benz E320 is a family sedan car.`
    }
}
const Product = Car("hatchback");
const myCar = new Product();
console.log(myCar.about())