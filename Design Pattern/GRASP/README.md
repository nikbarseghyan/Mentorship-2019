# GRASP (General Responsibility Assignment Software Patterns).

<div align="center">
    <img alt="I" width="350px" display='block' src="https://lh3.googleusercontent.com/proxy/M0coiBgStwaqYXX6S55SO9jkciBf5_H4RVu8sn6I0pb3hjFB87p6Q7xs3rb1L6bDRhLfhA70m0Tjmzaede_AxI7rPiiWgjif_g5frGw"/>
</div>

## Օգտագործվում է ընդհանուր խնդիրներ լուծելու համար, բաշխելով պարտականություններ և առաջադրանքները Object-ների և class-ների․

<b>GRASP բախկացած է 5 հիմնական և 4 օժանդակ ձևանմուշներ՝</b>
<table><tr>
<td valign="top" width="450%">
<div align="center">
<h3>Հիմնական</h3>
</div>
<div align="center">  
  Information Expert<br /> 
  Creator<br />
  Controller<br />
  Low Coupling (Թույլ կապվածություն)<br />
  High Cohesion (Բարձր համախմբվածություն)<br />
</div></td><td valign="top" width="50%">
<div align="center">
<h6>Օժանդակ</h6>
</div>
<div align="center"> 
 Pure Fabrication <br />
  Indirection <br />
  Protected Variations<br />
  Polymorphism <br />
 </div>
</td>
</tr></table>  
<hr/>

<div align="center">
<h4>Information Expert</h4>
<p>
Ձևանմուշը սահմանում է պարտականությունների բաշխման հիմնական սկզբունքը։ SOLID-ի Single Responsibility Principle​ (SRP)
Խախտելը հանգեցնում է՝ Spaghetti Code antipattern-ին։
</p>
</div>
<div align="center">
<h4>Creator</h4>
<p>
Creator օբյեկտի էությունն կայանում է նրանում, որ նրանով ստեղծում ենք մեկ այլ օբյեկտներ։
Abstract Factory-ին Creator-ի այընտրանքն է։
</p>
</div>
<div align="center">
<h4>Controller</h4>
<p>
Controller ձևանմուշը նախատեսված է ինտերակտիվ ծրագրում ինտերֆեյսն ու տրամաբանությունը(business logic) բաժանելու խնդիրը լուծելու համար:
Ավելի հայտնի է MVC պարադիգմից: Controller-ը պատասխանատու է հարցումները մշակելու համար և որոշում է, թե ով պետք է կատարի պահանջները: Ամփոփելով Controller-ի պատասխանատու է համակարգի մուտքային հաղորդագրությունների մշակման համար:
</p>
</div>
<div align="center">
<h4>Low Coupling(Թույլ կապվածություն)</h4>
<p>
Եթե օբյեկտները "ուժեղ" կապված են միմյանց հետ, ապա դրանցից ցանկացածի փոփոխությունն հանգեցնում է բոլոր կապակցված օբյեկտների փոփոխություններին:
Դա անհարմար է և ստեղծում է բազմաթիվ խնդիրներ: Low Coupling ասում է, որ անհրաժեշտ է, որ կոդը թույլ կապված լինի և կախված լինի միայն՝ աբստրակցիայից։
Low Coupling նաև հանդիպում ենք SOLID-ի Dependency Inversion Principle​ (DIP), ըստ էության Low Coupling իրականացում է Dependency Injection։
</p>
</div>
<div align="center">
<h4>High Cohesion(Բարձր համախմբվածություն)</h4>
<p>
Կարելի է ասել որ SOLID-ի Single Responsibility Principle​ (SRP) սկզբունքի ռեալիզացիան է։
High Cohesion սկզբունքն ասում է, որ Class-ը պետք է փորձի հնարավորինս քիչ առաջադրանքներ կատարել, որոնք հատուկ չեն դրան և ունեն հստակ սահմանված շրջանակ:
Սխալ մոտոցումը հանգեցնում է սխալ Low Coupling-ին։
</p>
</div>
<hr />
<div align="center">
<h4>Pure Fabrication</h4>
<p>
Pure Fabrication կամ մաքուր հորինում(մաքուր սինթեզ): Խոսքը հորինված օբեկտի մասին է։ Անալոգային օրինակը՝ Service DDD պարադիգմից։
Ինչպիսի խնդիր է պորձում լուծել՝ 
- Նվազեցնում է կապվածությունը(Low Coupling)
- Բարձրացնում է համախմբվածությունը(High Cohesion)
- Պարզեցնում է կոդի կրկնակի օգտագործումը
</p>
</div>
<div align="center">
<h4>Indirection</h4>
<p></p>
</div>
<div align="center">
<h4>Polymorphism</h4>
<p></p>
</div>
<div align="center">
<h4>Protected Variations</h4>
<p></p>
</div>