/**
 * @SRI The Single Responsibility Principle
 * Յուրաքանչյուր @Module պետք է ունենա մեկ և միայն մեկ պատճառ փոփոխվելու։
 * Յուրաքանչյուր @Class պետք է պատասխանատու լինի մեկ բանի համար։
 * 
 * Այսպիսով այս @Princip օգնում է բաժանել իրարից կոնստրուկտը անկախ մասերի։ ԵՎ ավելի օպտիմալ ղեկավարել դրանց։
 * @GOD (God Of Object) @Anti_Pattern Աստվածային օբեկտ: @GRASP @Information_Expert Խախտում։
 */

class ExampleUser {
    //Ժամանակի ընթացքում մեծանում է։
    //class շատ պատճառներ ունի փոփոխվելու
    constructor(model: string){}
    getModel(){}
    saveUserOrder(o: ExampleUser){}
    setModel(){}
    updateCountSet(set:object){}
    removeUserOrder(id: string){}
    updateUserOrder(id: string){}
}

//Բաժանել
class ExampleUser_ {
    //Պատասխանատու է բուն class համար։
    constructor(model: string){}
    getModel(){}
    setModel(){}
}

class UserOrder {
    //Պատասխանատու է "պատվերների" համար։
    saveUserOrder(o: ExampleUser){}
    removeUserOrder(id: string){}
    updateUserOrder(id: string){}
}

class UserDB {
    //Պատասխանատու է DB համար։
    updateCountSet(set:object){}
}