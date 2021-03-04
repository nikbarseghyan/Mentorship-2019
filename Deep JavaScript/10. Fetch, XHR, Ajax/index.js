/**
 *@AJAX (Asynchronous JavaScript and XML) սա ինքնին տեխնոլոգիա չէ, այլ տերմին է, որը նկարագրում է առկա նոր տեխնոլոգիաները 
 * միասին օգտագործելու նոր մոտեցումը` HTML կամ XHTML, CSS, JavaScript, DOM, XML, XSLT, և XMLHttpRequest։
 * Երբ այս տեխնոլոգիաները համակցվում են AJAX մոդելի մեջ, վեբ հավելվածները ի վիճակի են արագ թարմացումներ
 * կատարել օգտվողի վեբ էջում՝ առանց browser-ի կողմից էջն ամբողջությամբ վերբեռնելու(reload):
 * Հավելվածը ավելի արագ են գործարկվում և ավելի շուտ է արձագանքում օգտագործողի գործողություններին:
 */

/**
 * @XMLHttpRequest դա API, որը ապահովում է հաճախորդի(client) և սերվերի միջև տվյալների փոխանակման ֆունկցիոնալություն:
 * Այս API-ն ապահովում է հարցումից տվյալների ստացման հեշտ միջոց` առանց էջը վերաբեռնելու(reload): Սա թույլ է տալիս թարմացնել վեբ էջի 
 * միայն մի մասը՝ առանց օգտագործողին ընդհատելու: XHR-ն օգտագործվում է @AJAX հարցումներում և հատկապես single-page ծրագրերում։
 */

/**
 * @CORS (Cross-Origin Resource Sharing) Մեխանիզմ, որն օգտագործում է լրացուցիչ HTTP-headers` օգտագործողի գործակալին«(agent)
 *  թույլ տալու աղբյուրից՝ սերվերից, ընտրված ռեսուրսներ, մուտք գործելու թույլտվություններ ստանալ։
 */

/**
 * @Fetch_API Ներկայացնում է իրենից JavaScript ինտերֆեյս, HTTP հարցումների և պատասխանների հետ աշխատելու համար:
 * fetch() որը թույլ է տալիս հեշտությամբ և տրամաբանորեն ցանցից ասինխրոն կերպով վերցնել ռեսուրսներ:
 * 
 * @Body @Request @Response
 * @arrayBuffer @blob @json @text @formData
 */

const url = 'https://example.com/profile',
    data = { username: 'example' };

fetch('http://example.com/movies.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

try {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    console.log('Success:', JSON.stringify(json));
} catch (ex) {
    console.error('Exception:', ex);
}

/**
 * @HTTP_Response_Status_Codes
 * 
 * Informational responses (100–199) Տեղեկատվական պատասխաննե
 * Successful responses (200–299) Հաջող պատասխաններ
 * Redirects (300–399) Վերահղումներ
 * Client errors (400–499) Հաճախորդի սխալներ
 * Server errors (500–599) Սերվերի սխալներ
 */