/**
 * @Պոլիմորֆիզմ @Polymorphism
 * 
 * Պոլիմորֆիզմը հնարավորություն է տալիս օգտագործել նույն ինտերֆեյսը ընդհանուր @Class գործողությունների համար։ 
 * Յուրաքանչյուր գործողություն կախված է կոնկրետ իրադրությունից։
 * հատուկ պոլիմորֆիզմ (կամ @ad_hoc պոլիմորֆիզմ) նկարագրվում է «նման ինտերֆեյսով շատ իրագործումներ» սկզբունքով,
 * պարամետրիկ պոլիմորֆիզմը    «մեկ իրագործում ընդհանրացված ինտերֆեյսով» պրինցիպով։
 * 
 * Այլ կերպ ասած՝ @Պոլիմորֆիզմը նույն օբեկտը տարբեր միջավայրերում իրեն տարբեր կերպ դրսևորելու հատկությունն է:
 */

class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    me() {
        return `My name is ${this.name}`;
    }
}

const gvenik = new Person('Gvenik');
console.log(gvenik.me());  // ->  'My name is Gvenik'

class Employee extends Person {
    salary;
    constructor (name, salary) {
        super(name);
        this.salary = salary;
    }
    me() {
        return `Who is ${this.name}? ${this.name} my friend and his salary is ${this.salary}`;
    } 
}
const babken = new Employee('Babken', 300000);
console.log(babken.me());// ->  Who is Banken? Banken my friend and his salary is 300000