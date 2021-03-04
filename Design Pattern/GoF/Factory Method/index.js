/**
 * @Factory_Method
 * Հեշտացնում է օբյեկտի ստեղծումը, ավելի հարմարավետ է գեներացնել օբյեկտի էքզեմպլիառ(չի պահանջում @constructor օգտագործում)։
 * @Առավելություն Օգտագործվում է երբ անհրաժեշտ է միևնուն օբյեկտը, նույն կառուցվածքով բայց տարբեր մուտքային տվյալներով ռեալիզացնել։
 * @Թերություն Շատ մեծ տվյալներ դեպքում մեր օբյեկտի կառուցվածքը կարող է բավականին մեծանալ։
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%96%D5%A1%D5%A2%D6%80%D5%AB%D5%AF%D5%A1%D5%B5%D5%AB%D5%B6_%D5%B4%D5%A5%D5%A9%D5%B8%D5%A4_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */

class Kia {
    constructor(model,price, speed) {
        this.model = model
        this.price = price
        this.speed = speed
    }
}

class KiaFactory {
    yourCar(carModel) {
        if(carModel === "Cerato") return new Kia(carModel, "10000$", "150 km/t");
        if(carModel === "Optima") return new Kia(carModel, "15000$", "170 km/t");
    }
}

const factory = new KiaFactory()
const cerato  = factory.yourCar("Cerato")
const optima  = factory.yourCar("Optima")
console.log(cerato, optima)