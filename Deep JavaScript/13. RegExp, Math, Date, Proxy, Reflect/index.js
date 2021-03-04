/**
 * @Date օբեկտը թույլ է տալիս աշխատել JavaScript-ում ամսաթվերի և ժամերի հետ։
 * @Unix @timestamp
 * @get
 * @set
 */
const timestamp = new Date(1359270000000),
    currentDate = new Date(),
    newDate     = new Date();

let hour   = currentDate.getHours(),
    minute = currentDate.getMinutes(),
    second = currentDate.getSeconds();

newDate.setDate(15)
newDate.setMonth(6)
newDate.setYear(2013)
console.log(currentDate, hour, minute, second)

/**
 * @Math օբեկտը ներկայացնում է մի շարք մաթեմատիկական գործառույթներ, որոնք կարող են օգտագործվել հաշվարկներում:
 * @abs - |x| @min @max @ceil @round @floor @random @pow @sqrt @log @sin_cos_tan_asin_acos_atan
 */
let a = -22;
let abs = Math.abs(a) // 22

let max = Math.max(10, 45) // 45
let min = Math.min(3, 24)  // 3

let x = Math.ceil(9.4)     // 10
let y = Math.ceil(-5.9)    // -5
let x1 = Math.floor(9.4)   // 9
let y2 = Math.floor(-5.9)  // -6
let x3 = Math.round(5.5)   // 6
let y3 = Math.round(5.4)   // 5
let x4 = Math.round(-5.4)  // -5
let y4 = Math.round(-5.5)  // -5

let random = Math.random() // Հետ է վերադարձնում (0-1) տիրույթից պատահական թիվ։
let pow = Math.pow(2, 3) // 8
let pow1 = 2**3 // 8 
let sqrt = Math.sqrt(121) // 11
let sqrt1 = Math.sqrt(9) //3
let log = Math.log(1); // 0
let log1 = Math.log(10); // 2.302585092994046

let sin = Math.sin(Math.PI/2) // 1
let cos = Math.cos(0) // 1
let tan = Math.tan(Math.PI/4) // 0.999999999999999
console.log(Math.PI,  Math.E, Math.LN2, ' ... ')

let numberEyler = Math.log(Math.E); // 1

/**
 * @RegExp (Կանոնավոր արտահայտություններ) օբյեկտը, ներկայացնում է մի օրինակ, որով հնարավորություն ենք ունենում տողում ինր-որ սինվոլ
 *          փնտրելու կամ փոփոխողության ենթարկելու։
 * @test @exec @match
 * @global @ignoreCase @multiline 
 */
const regex = new RegExp('\\w+')
let txt = "hello world!";
let exp = /hello/;
let result = exp.test(txt); // true

let re = /(\w+)\s(\w+)/;
let str = 'Arman Elbakyan';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);

//! URL validation. return Boolean.
const containsUrl = messege => {
    const res = messege.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm);
    return res == null ? false : true;
}

 //! Giphy validation. return Boolean.
const containsGiphy = message => {
    const res = message.match(/\b(?:(http|https)|media|com|giphy|gif)\b/gi);
    return res && res.length === 7;
};

/**
 * @Proxy Շերտ է օբյեկտի շուրջ, որը «default» դրա վրա գործողությունները վերահղում է դեպի օբյեկտ, *
 * @intercession_API @proxy
 */


/**
  * @Reflect Հեշտացնում է @Proxy -ի ստեղծումը։ *
  */