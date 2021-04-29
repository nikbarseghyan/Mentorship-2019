# Trunk Based Development(TDB)

Release Strategy-ից մեկն է: Այս մոտեցումը նույնպես ստանդարտ չէ և չկա պարտադրող հանգամանք այն օգտագործելու համար։ Ամեն ինչ կախված
է կոնկրետ խնդրից։

## TDB-ի հիմնական գաղափարները
- [x] Այս մոդելը կիրառվում է այն դեպքերում երբ պարբերաբար release է տրվում ծրագիրը(application), փոքր կամ մեծ թարմացումներ ավելացնելուց հետո:
- [x] TDB-ն առաջարկում է պահել հիմնական 2 ճյուղ՝ master, development:
- [x] Իսկ սխալների շտկման համար ստեղծվեն ժամանակավոր ճյուղեր որոնք միաձուլումից հետո կջնջվեն: 

## Աշխատանքի հաջորդականությունը TDB մոդելն օգտագործելիս

- [1] ՈՒնենք 3 server՝ Production(Prod), Staging(Stage), Development(Dev)
    Development(Dev) - Մշակման, նոր թարմացումների ավելացման և թեստավորման ֆազա։
    Staging(Stage) -  Blue ֆազա, Մաքսիմալ մոտ արտադրանքի վերջնական տեսքին, վերջնական խնդիրների ֆիքսման ֆազա։
    Production(Prod) - Green ֆազա, Live Production Մեր արտադրանքի վերջնական ֆազա։
- [2] <b>development-develop</b> branch-ից release է լինում միան Development(Dev) server-ը։ Յուրաքանցյուր commit-ից հետո develop branch-ը release
    է գնում ավտոմատ կերպով։ Եթե խնդիր է հայտնաբերվում, այն ֆիքսվում է և միայն հետ նոր միաձուլվում է develop-ը master-ի հետ։
- [3] <b>master-main</b> branch release է լինում մեր՝ Production(Prod), Staging(Stage) server-ը: Միաձուլումից հետո ավտոմատ կերպով release
    է գնում Staging(Stage) server-ը, անցնելով թեստի փուլը եթե իհարկե նախապես գրված թեստեր(unit, e2e, integration) կան։ Եթե ամեն ինչ հաջող է
    ավարտվել և որևէ խնդիր չի հայտնաբերվել, "ձեռքով" կամ ավտոմատ կերպով release է գնում Production(Prod) server-ը։

# Blue-Green deployment

<table><tr>
    <td valign="top" width="50%">
        <div align="center">  
         <img alt="Blue-Green deployment" src="https://cdn2.hubspot.net/hubfs/208250/Blog_Images/bluegreen1.png" />
        </div></td><td valign="top" width="50%">
        <div align="center">
            Սա համարվու է <b>Zero-Downtime-Deployment-ի</b> ստրատեգիայի մոտեցումներից մեկը։ <b>Blue-Green deployment</b> մոտեցման դեպքում ամեն ինչ
            նույն է(TDB) մեկ տարբերությամբ, որ օգտագործվում է մեկ Database՝ Staging-ի և Production-ի համր, որոնք պրակտիկորեն կարող են մեկը մյուսին 
            հավասարապես փոխարինել, անհրաժեշտության դեպքում։
        </div>
    </td>
</tr></table> 

