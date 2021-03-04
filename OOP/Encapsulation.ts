/**
 * @Ինկապսուլյացիա @Encapsulation
 * @Encapsulation իրենից ներկայացնում է մեխանիզմ, որը կապում է կոդը տվյալների հետ (որոնք այն օգտագործում է)՝
 * պաշտպանելով այդ երկուսը արտաքին ներգործությունից։ Ինկապսուլացիան կարելի է համարել պաշտպանիչ շերտ, 
 * որը պաշտպանում է կոդը և տվյալները այլ արտաքին կոդի կողմից շահագործումից։
 * 
 * @TypeScript ` @private @protected @public
 */

class EncapsulationMethods {
    private private(): string {
        return 'hello world'
    }

    getPrivateMessage() {
        return this.private()
    }
}

const instance = new EncapsulationMethods()
console.log(instance.getPrivateMessage()) //"hello world"

/** JavaScript */
class Encapsulation {
    #privateVarible

    constructor() {
        this.#privateVarible = 42
    }
}

class PrivateAccessor {
    #message

    get #decoratedMessage() {
        return `${this.#message}`
    }
    set #decoratedMessage(msg) {
        this.#message = msg
    }

    constructor() {
        this.#decoratedMessage = 'hello world'
        console.log(this.#decoratedMessage)
    }
}

new ClassWithPrivateAccessor();//"hello world" Զզվելի չէ