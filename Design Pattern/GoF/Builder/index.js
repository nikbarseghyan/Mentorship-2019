/**
 * @Builder
 * Հարմար տարբերակով օգնում է ստեղծել օբեկտի տարբեր կոնֆիգուրացիաներ։
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%BF%D5%A1%D5%BC%D5%B8%D6%82%D6%81%D5%B8%D5%B2_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */

class Mobile {
    constructor(){
        this.browser = ''
        this.camera = false
        this.radio = false
    }
}
class MobileBulder {
    constructor() {
        this.mobile = new Mobile();
    }

    addBrowser(browser){
        this.mobile.browser = browser
        return this
    }
    addCamera(camera){
        this.mobile.camera = camera
        return this
    }
    addRadio(radio){
        this.mobile.radio = radio
        return this
    }
    phoneModel(name){
        this.mobile.name = name
        return this
    }

    builder(){
        return this.mobile
    }
}

const xiaomi = new MobileBulder()
    .addBrowser("Chrome")
    .addCamera(true)
    .addRadio(true)
    .phoneModel('Mi 10 Light')
    .builder();

const nokia = new MobileBulder()
    .addRadio(true)
    .phoneModel('8800 Sirocco')
    .builder();

console.log(xiaomi, nokia)