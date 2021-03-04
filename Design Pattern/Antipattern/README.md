# Հակաձևանմուշներ. (Antipattern)

| Հակաձևանմուշներ | Օրինակներ | 
| ---  | --- |
| [![Antipattern](https://image.slidesharecdn.com/antipatterns-1277454533-phpapp02/95/anti-patterns-10-728.jpg?cb=1280252045)]() | [![List](https://www.rundeck.com/hubfs/dogpile-antipattern-before.png)]()

```sh
│
│   
├───God of Object
│       index.js
│       
├───Hard Code
│       index.js
│
└───Spaghetti Code
        index.js
```

<div align="center">
<h2>Հակաձևանմուշներ</h2>
<p>Դա ընդհանուր մոտեցում է ընդհանուր խնդիրների լուծմանը, որոնք ռիսկային են կամ անարդյունավետ: Այլ կերպ ասած, դա սխալների ձևանմուշ է (որը երբեմն անվանում են նաև ծուղակ)<br />
Որպես կանոն @Antipattern-ին բաժանում են հետևյալ խմբերի՝<br/>

<b>Architectural antipattern:</b> առաջանում է համակարգի կառուցվածքի և դրա ներքին բաղադրիչների փոխկապակցումը չափազանց անարդյունավետ մտածվելու հետևանքով կամ ընդհանրապես մտածված չէ նախագծման ընթացքում *:<br/>
<ul style="list-style-type: none">
<li>Abstraction inversion</li>
<li>Ambiguous viewpoint</li>
<li>Big ball of mud</li>
<li>Gas factory</li>
<li>Input kludge</li>
<li>Interface bloat</li>
<li>Magic pushbutton</li>
<li>Re-Coupling</li>
<li>Stovepipe System</li>
<li>Race hazard, Race condition</li>
<li>Mutilation</li>
<li>Save or die</li>
</ul>

<b>Development antipattern:</b> սրանք խնդիրներ են, որոնք բխում են ծրագրիրը մշակողների(ծրագրավորողնների) սխալ որոշումներից: Նույնիսկ եթե ծրագրի ճարտարապետությունը շատ լավ մտածված է, ապա դրա իրականացման ընթացքում կարող են առաջանալ որոշ հարցեր, որոնց սխալ լուծումը կարող է հանգեցնել վատ ստեղծված ծրագրի: *<br/>
<table><tr>
<td valign="top" width="33%">
<div align="center">
<h6><b>Methodological Antipattern</b></h6>
</div>
<div align="center">  
<ul list-style-type="none">
<li>Copy and paste programming</li>
<li>De-Factoring</li>
<li>Golden hammer</li>
<li>Improbability factor</li>
<li>Premature optimization</li>
<li>Programming by permutation</li>
<li>Reinventing the wheel</li>
<li>Reinventing the square wheel</li>
<li>Self-destruction</li>
<li>Two tunnel</li>
<li>Commit assasin</li>
<li>Dependency hell</li>
</ul>
</div></td>
<td valign="top" width="33%">
<div align="center">
<h6><b>OOP Antipattern</b></h6>
</div>
<div align="center"> 
<ul style="list-style-type: none">
<li>BaseBean</li>
<li>Anemic Domain Model</li>
<li>Call super</li>
<li>Empty subclass failure</li>
<li>God object</li>
<li>Object cesspool</li>
<li>Poltergeist</li>
<li>Yo-yo problem</li>
<li>Singletonitis</li>
<li>Privatisation</li>
<li>MutFriend zoneilation</li>
<li>Interface soup</li>
<li>Stub</li>
</ul>
</div>
</td>
<td valign="top" width="33%">
<div align="center">
<h6><b>Coding Antipattern</b></h6>
</div>
<div align="center">  
<ul style="list-style-type: none">
<li>Accidental complexity</li>
<li>Action at a distance</li>
<li>Accumulate and fire</li>
<li>Blind faith</li>
<li>Boat anchor</li>
<li>Busy spin, busy waiting</li>
<li>Caching failure</li>
<li>The Diaper Pattern Stinks</li>
<li>Checking type instead of membership, Checking type instead of interface</li>
<li>Code momentum</li>
<li>Coding by exception</li>
<li>Cryptic code</li>
<li>Hard code</li>
<li>Soft code</li>
<li>Lava flow</li>
<li>Magic numbers</li>
<li>Procedural code</li>
<li>Spaghetti code</li>
<li>Lasagnia code</li>
<li>Ravioli code</li>
<li>Soap bubble</li>
<li>Mutex hell</li>
<li>Template cancer</li>
</ul>
</div></td>
</tr></table> 

<b>Management antipattern:</b> սրանք խնդիրներ են, որոնք առաջ են գալիս ծրագրի ղեկավար-մենեջերի սխալ որոշման արդյունքում: Պրոեկտի ղեկավարը պատասխանատու է ծրագրի մշակման մեջ ներգրավված բոլոր նրանց փոխգործակցության համար: Ծրագրի(պրոեկտի) ժամկետի և դրա չափի համար հատկացված ռեսուրսների վերաբերյալ որոշումներն, ուղղակիորեն կախված են մենեջերից, ինչը ազդում է ամբողջ ծրագրի ճշգրտության վրա:
<ul style="list-style-type: none">
<li>Analysis paralysis</li>
<li>Cash cow</li>
<li>Continuous obsolescence</li>
<li>Cost migration</li>
<li>Creeping featurism</li>
<li>Creeping elegance</li>
<li>Design by committee</li>
<li>Escalation of commitment</li>
<li>I told you so</li>
<li>Management by numbers</li>
<li>Management by perkele</li>
<li>Mushroom management</li>
<li>Seagull management or Corporate seagull </li>
<li>Scope creep</li>
<li>Vendor lock-in</li>
<li>Warm Bodies</li>
<li>Single head of knowledge, SHOK</li>
<li>Knight in shining armor, KISA</li>
<li>Witch hunt</li>
</ul>
</p>
</div>
