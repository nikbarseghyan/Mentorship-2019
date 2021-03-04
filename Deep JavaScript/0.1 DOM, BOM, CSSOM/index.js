/**
 * @Critical_Rendering_Path @CRP
 * 1) Կառուցել DOM ծառը
 * 2) Կառուցել CSSOM ծառը
 * 3) JavaScript-ի գործարկում
 * 4) Ստեղծել @Render_Tree ծառը(դա համադրություն է  DOM-ի և CSSOM-ի)
 * 5) Գեներացնել դասավորությունը @Layout
      <meta name="viewport" content="width=device-width,initial-scale=1">
 * 6) Նկարել(պատկերել) @Paint
 */

/**
 * @DOM  Document Object Model -ը վեբ էջը նկարագրում է որպես ծառանման կառուցվածք և հնարավորություն է տալիս ծրագրավորողին 
 *      մուտք ունենալ դեպի վեբ էջի առանձին տարրեր: DOM ունի հիռառխիկ տեսք։
      <!DOCTYPE html>
      <html>
      <head>
         <title>Critical Rendering Path</title>
      </head>
      <body>
         <h2>DOM h2 Հանգույց(node) </h2> 
      </body>
      </html>
 * @Element @Attr @Document @Text ...
 * @getElementById @getElementsByTagName @getElementsByClassName @querySelector ...
 * @Node => @childNodes @firstChild @nextSibling @nodeValue @nodeName ...
 * @createElement @createTextNode @appendChild @insertBefore
 * @getAttribute @setAttribute @removeAttribute @innerHTML @innerText @tagName @offsetWidth @offsetHeight ....
 * @CSS => @style @className @classList @add @remove @toggle
 * 
    let div =  document.querySelector("div.article")
    div.classList.add("blueStyle")
    div.classList.remove("article")

 */


/**
 * @BOM Browser Object Model Բոլոր օբյեկտները, որոնց միջոցով JavaScript-ը փոխազդում է browser(զննարկչի) հետ, 
 *      նկարագրվում են BOM-ի միջոցով։
 * 
 * @window Վեբ պատուհան browser-ում, այն գլոբալ օբեկտ է window.alert("Ովա արա")
    window.open('https://google.com', 'Google', 'width=450, height=450, resizable=yes')
    @confirm @prompt @open @close @moveTo @resizeTo ...

 * @history օբեկտ է, որը նախատեսված է browser-ում վեբ էջերի այցելությունների պատմությանն պահելուն։
    document.write(history.length);
    history.back();
    history.go(4)
    @back @forward @go

 *@location օբյեկտը պարունակում է տեղեկություններ ընթացիկ ինտերնետային կայքի գտնվելու վայրի մասին` URL, սերվերի մասին տեղեկատվություն,
    @port -ի համրը, @protocol : Օգտագործելով location օբյեկտը, մենք կարող ենք ստանալ այդ տեղեկատվությունը։
    @href @pathname @origin @protocol @port @host @hostname @hash @search
    location.port
    assign(url) reload(forcedReload) replace(url)
    location.assign("http://google.com");

 *@navigator օբյեկտը պարունակում է տեղեկություններ browser-ի և օպերացիոն համակարգի մասին, որի վրա գործարկվում է browser-ը։ @userAgent
    document.write(navigator.userAgent) // Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36
    let userAgent = navigator.userAgent;
    @geolocation
    navigator.geolocation.getCurrentPosition

 *@screen

 * @timer Ընդմիջումներով գործողություններ կատարելու համար window օբյեկտը տրամադրում է timer* գործառույթներ։ 
    timer-ը երկու տեսակի են լինում՝ ոմանք աշխատում են միայն մեկ անգամ, իսկ մյուսները ՝ որոշակի ժամանակահատվածում անընդհատ:
    @setTimeout @clearTimeout @setInterval @clearInterval
    setTimeout(someFunction, period)
    @requestAnimationFrame @cancelAnimationFrame

 * 
 */

/**
 * @CSSOM CSS Object Model API-ների մի շարք է, որոնք թույլ են տալիս շահարկել(օգտագործել) CSS-ը JavaScript-ով:
 * Շատ նման է DOM-ին բայց CSS-ի համար այլ ոչ HTML-ի։ 
 */

/**
 * @Shadow_DOM Document-ի այն մասը որն encapsulation(քողարկված) է DOM-ում: 
 *  Այն(ստվերային մոդելը) Document-ի մի մասն է և տեղադրված է անմիջապես էջի ներսում:
 * @Web_COmponent @HTML_Template @Custom_Elements @HTML_Imports
 * @Light_tree @Shadow_tree
 * @Flattened_DOM
 * shadow = elem.attachShadow({mode: open|closed}) Ստեղծում է Shadow DOM տարր։ JavaScript-ի համար տեսանելի չէ**։
 */

