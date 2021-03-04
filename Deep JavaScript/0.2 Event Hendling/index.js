/**
 * @Event Դա գործողություններ կամ իրադարձություններ են, որոնք տեղի են ունենում մեր(user) կողմից ծրագրավորված համակարգում,
 * որի մասին համակարգը մեզ տեղեկացնում է, որպեսզի կարողանաք համագործակցել(մշակել) և համարժեք հետադարձ կապ տանք:
 * Web իրադարձությունը աշխատում է browser-ի պատուհանի ներսում և սովորաբար կցվում կոնկրետ HTML էլեմենտին։
 * @Օրինակ ` @MouseEvent @KeyboardEvents @DOMContentLoaded @CSSEvents @Clik @Error ...
 * 
 * @Event_Handler Դա կոդի բլոկ է(function), որը աշխատելու է այն ժամանակ երբ իրադարձություն տեղի կունենա: Շնորհիվ @Event_Handler -ի
 * JavaScript կոդը կարող է արձագանքել օգտվողի գործողություններին: @RegisterEventHandler @EventListeners - Հետևում է փոփոխություններին։
 * 
 * Web էջերի համար JavaScript-ի իրադարձությունների մոդելը տարբերվում է պարզ JavaScript-ի իրադարձությունների մոդելից, 
 * քանի որ դրանք օգտագործվում են տարբեր միջավայրերում, օրինակ Node.js @EventEmitter @ErrorEvents ...
 * 
 * @Event -նները JavaScript-ի հիմնական մաս չեն, դրանք որոշվում են browser-ի վեբ ինտերֆեյսներում(Web API, WebExtensions կամ Node)
 */ 

/**
 * @Օրինակ ՝
        <button>Change color</button>
        const btn = document.querySelector('button');
        function random(number) {
            return Math.floor(Math.random() * (number+1));
        }

        btn.onclick = function() {
            const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
            document.body.style.backgroundColor = rndCol;
        }
*/

/**
 * Քանի որ DOM տարրը կարող է ունենալ միայն մեկ հատկություն(onclick)*, այսպիսով մենք չենք կարող մեկից ավելի մշակող(handler) ունենալ?:
 * 
 * @Document_Object_Model_Level_2_Events_Specification
 * 
 * @addEventListener elem.addEventListener("click", () => console.log('Hello')); Մեթոդը թույլ է տալիս ավելացնել մեկից ավելի
 * մշակողներ(handler) մեկ էլեմենտի վրա։
        <input id="elem" type="button" value="Click Me"/>
        <script>
            function onClickHandlerAlert() {
                alert('Alert - Valodik!');
            };

            function onClickHandlerConsole() {
                console.log('Log - Valodik')
            }

        elem.onclick = () => console.log("Hello");
        elem.addEventListener("click", onClickHandlerAlert);
        elem.addEventListener("click", onClickHandlerConsole);
 * 
 * @removeEventListener element.removeEventListener(event, handler[, options]); Որը մաքրում է նախկինում ավելացված ունկնդրին(Listener)
 */

/**
 * @Object_Event Երբ իրադարձություն է պատահում, browser-ը ստեղծում է Object_Event մանրամասները գրում է դրա մեջ և փոխանցում է
 * այն ​​որպես արգումենտ դեպի մշակող ֆունկցիային(function_handler):
        elem.onclick = function(event) {
            console.log(event)
        }
 * event.type event.currentTarget event.clientX event.clientY ...
 */

/**
  * @Lifecycle_Event 
  * @DOM_Events ստանդարտը նկարագրում է իրադարձության անցման 3 փուլ`
  * @Event_Capturing @Event_Target @Event_Bubbling
  * 
  * @Event_Delegation
  * 
*/

/**
 * @Event_Capturing @Capturing_Phase @ՎերևիցՆերքև
 * 
 * Bubbling_Stage պռոցեսը սկսվում է event.target-ից դեպի վեր։ Default event.target → <html> → document երբեմն նաև window
 * կանչելով բոլոր մշակողների(handler event-ը) իր ճանպարհին։ Որպիսզի կանգնեցնել ընթացքը պետք է կանչել @event.stopPropagation()

    <body onclick="alert(`Alert`)">
        <button onclick="event.stopPropagation()">Submit</button>
    </body>

 *@onclick <button> և վերջ չի բարձրանա։
 * @event.stopPropagation Կանխում է իրադարձության հետագա առաջընթացը, բայց ընթացիկ էլեմենտի վրա կանչվելու են բոլոր մշակողները(handler event-ը):
 * @event.stopImmediatePropagation Նույնպես կանխում է իրադարձության հետագա առաջընթացը, նաև դադարեցնում է
 *  ընթացիկ էլեմենտի վրա իրադարձությունների մշակումը:
 */

/**
 * @Event_Target @Target_Phase @Ընկղմում
 * 
 * Եթե ունենք՝ window → Document → <html> → <body> → <ul> → <li>/<span>, <li><span ?@event.taget >:
 * Այսպիսով @click <span>-ի վրա, իրադարձությունը ծնողական շղթայով իջնում ​​է նախ և առաջ դեպի էլեմենտը,
 * ապա այն հասնում է թիրախային էլեմենտին(event.taget), հետո բարձրանում է վեր, ճանապարհին կանչում է մշակողներին(handler event-րին)։
        <style>
            body * {
                margin: 10px;
                border: 1px solid blue;
            }
        </style>

        <form>
            <div>
                <p>Target</p>
            </div>
        </form>

        <script>
        for(let elem of document.querySelectorAll('*')) {
            elem.addEventListener("click", e => alert(`Target Event: ${elem.tagName}`), true);
            elem.addEventListener("click", e => alert(`Capturing Event: ${elem.tagName}`));
        }
        </script>
 *
 * 1) HTML → BODY → FORM → DIV  @Capturing_Phase
 * 2) P                            @Target_Phase
 * 3) DIV → FORM → BODY → HTML  @Bubbling_Stage
 * 
 * @event.eventPhase
 */

/**
 * @Event_bubbling @Bubbling_Stage Երբ իրադարձություն է տեղի ունենում որևէ էլեմենտի վրա, մշակող(handler event-ը) ֆունկցիան գործարկվում
 * է դրա վրա(էլեմենտի), այնուհետև դրա ծնողի վրա(եթե կա), ապա ծնողի, ծնողի վրա և այդպես մինչև շղթայի վերջ(նախնիների):@ՆերքևիցՎերև

        <style>
            body * {
                margin: 10px;
                border: 1px solid blue;
            }
        </style>

        <form onclick="alert('form')">
            <div onclick="alert('div')">
                <p onclick="alert('p')">Hello Event</p>
            </div>
        </form>

 *@onclick <P> → <DIV> → <FORM> → ...→ document Այպիսով կտեսնենք 3 հատ alert։
 * 
 * Ամենա խորը էլեմենտը, որի վրա տեղի է ունեցել event-ը անվանում են՝ @event.target և նա հասնաելի է event.target միջոցով։
 * @this = event.currentTarget
*/
