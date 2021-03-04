/**
 * @Cookie սա տվյալների փոքր տողեր են, որոնք պահվում են անմիջապես browser-ում: 
    HTTP protocol-ի մի մասն են, որը սահմանված է @RFC_6265 արձանագրության մեջ։ Cookie-ի ամենատարածված 
    օգտագործումներից մեկը նույնականացումն(authentication) է։ Cookie-երը սովորաբար տեղադրվում են վեբ սերվերի կողմից`
    օգտագործելով Set-Cookie վերնագիրը: Դրանից հետո browser-ը ավտոմատ կերպով կավելացնի դրանք(համարյա) 
    յուրաքանչյուր հարցման մեջ նույն domain-ին, օգտագործելով Cookie վերնագիրը:
    ա) Կայքը մուտք գործելիս սերվերն ի պատասխան ուղարկում է Set-Cookie HTTP վերնագիր՝ եզակի Cookie  
        նույնացուցիչով («session identifier»):
    բ) Հաջորդ հարցման ժամանակ այդ նույն domain-ին browser-ը ուղղարկում է HTTP վերնագիր՝ Cookie։
    գ) Այս կերպ սերվերը հասկանում է, թե ով է հարցում կատարել:
 * 
 * @Cookie տողը ընդունում է մինչև վեց տարբեր պարամետր՝ @name( @key ) @value @expires @path @domain @secure
    Եթե մենք հստակ չենք նշել պիտանելիության ժամկետը, browser-ը փակվելուց հետո cookie-ն կջնջվի:
    Այս իրավիճակը գուցե իդեալական է, երբ անհրաժեշտ է ջնջել ամբողջ տեղեկատվությունը web-page-ի հետ աշխատանքը
    ավարտելուց և browser-ը փակելուց հետո: Այնուամենայնիվ, այս ստրատեգիան միշտ չէ, որ տեղին է:

 * @expires Սահմանում է Cookie-ի պիտանելիության ժամկետը։ @toUTCString
    let expire = new Date();
    expire.setHours(expire.getHours() + 5); // 5 ժամ
    document.cookie = "login=Mariam;expires="expire.toUTCString();";

 * @path Եթե ​​մեզ անհրաժեշտ է Cookie-ին տեղադրել կոնկրետ հասցեի(ուղու,endpoint) վրա, ապա մենք կարող ենք օգտագործել path պարամետրը։
    document.cookie = "login=Mariam;expires="expire.toUTCString();path=/home;"; // www.myhost.am/home,

 * @domain Եթե ​​մեր կայքը ունենի բազմաթիվ sub-domain տիրույթներ, և մենք ուզում ենք Cookie-ին տեղադրել կոնկրետ տիրույթի վրա,
    ապա մենք կարող ենք օգտագործել @domain պարամետրը:
    document.cookie = "login=Mariam;expires="expire.toUTCString();path=/;domain=karkandak.myhost.am;"

 * @secure Սահմանում է SSL-ի (Secure Sockets Layer) օգտագործումը և հարմար է https protocol օգտագործող կայքերի համար:
    document.cookie = "login=Mariam;expires="expire.toUTCString();path=/;domain=karkandak.myhost.am;secure=true;"

 *@Cookie ունեն մի շարք սահմանափակումներ, օրինակ՝  browser-ը սահմանափակում է cookie-ի չափը, յուրաքանչյուր cookie-ի
    չի կարող գերազանցել 4 ԿԲ-ը և կայքում թույլատրվում է ավելի քան 20 cookie-ի(կախված browser-ից)։

 * 
 */

document.cookie = "login=valodik";
const cookie = document.cookie 

/**
 * @Web_Storage տվյալների պահպանման պահոց(HTML5), այն բաղկացած է երկու բաղադրիչներից՝ @Session_storage @Local_storage
    Առկա բոլոր տվյալները Web Storage-ում ներկայացվում են` @key_value զույգերի տեսքով: 

 * @Session_storage ներկայացնում է տեղեկատվության ժամանակավոր պահպանում, որը ջնջվում է browser-ը փակելուց հետո։

 * @Local_storage ներկայացնում է տվյալների պահոց` մշտական ​​հիմունքներով։ Տվյալները Local storage-ից ավտոմատ 
    կերպով չեն ջնջվում և չունեն պահպանման ժամկետ: Այս տվյալները HTTP հարցումով չեն փոխանցվում սերվերին:
    Բացի այդ, Chrome-ի և Firefox-ի Local storage-ի ծավալը 5 ՄԲ է, իսկ IE- ում `10 ՄԲ:

 * @setItem @getItem @removeItem @clear
 */

localStorage.setItem("email", "elen.98@gmail.com");
let email = localStorage.getItem("login"); // elen.98@gmail.com
localStorage.removeItem("email");
localStorage.clear();

const user = {
   name: "Thomas Alva Edison",
   age: 84,
   occupation: "Inventor, businessman"
};

localStorage.setItem("user", JSON.stringify(user));
let getUser = JSON.parse(localStorage.getItem("user"));
console.log(`${getUser.name}, ${getUser.occupation} age:${getUser.age}`)