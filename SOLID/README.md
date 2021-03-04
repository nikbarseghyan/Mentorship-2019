# SOLID
![alt text](https://devopedia.org/images/article/177/8101.1558682601.png)
<hr />

```sh
    .
    ├── SRP.js			# The Single Responsibility Principle
    ├── OCP.js			# The Open Closed Principle
    ├── LSP.js			# The Liskov Substitution Principle
    ├── ISP.js			# The Interface Segregation Principle
    ├── DIP.js			# The Dependency Inversion Principle
    └── ...
```

## Նպատակ
SOLID սկզբունքների օգտագործումը նպաստում է ստեղծել անպիսի համակարգ, որտեղ բավականին հեշտությամբ կարելի է պահպանել*, ընդլայնել* և սպասառկել* համակարգը:
SOLID օգտագործվում են OOP(Dinamic Polymorphism*)-ի կոնտեքստում։

<div align="center">
    <h3>SRP: The Single Responsibility Principle</h3>
    <img align="left" alt="SRP" width="250px" src="https://miro.medium.com/max/4800/1*gA_lSJtBewjUjWnPgy6ZWA.png" /></br>
    <i>A module should be responsible to one, and only one, actor.</i></br>
    <i>Յուրաքանչյուր <b>Class</b> պետք է ունենա մեկ և միայն մեկ պատճառ փոփոխվելու</i>
</div>

<div align="center">
    <h3>OCP: The Open Closed Principle</h3>
    <img align="left" alt="OCP" width="250px" src="https://miro.medium.com/max/4800/1*I9SQ5G9g6FUfPAFq1kC-Fw.png" /></br>
    <i>A software artifact should be open for extension but closed for modification.</i></br>
    <i>Մեդուլը պետք է բաց լինի ընդարձակման համար բայց փակ փոփոխության</i>
</div>

<div align="center">
    <h3>LSP: The Liskov Substitution Principle</h3>
    <img align="left" alt="LSP" width="250px" src="https://miro.medium.com/max/2160/1*qpdTYuVj4LHvgtmJmnJ1DQ.png" /></br>
    <i>Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.</i></br>
    <i>Անհրաժեշտ է որ <b>ենթատիպերը</b> ծառայեն որպես փոխնորդ իչենց <b>ծնող տիպի</b> համար, առանց այդ ծրագրի ճշգրտությունը փոխելու</i>
</div>

<div align="center">
    <h3>ISP: The Interface Segregation Principle</h3>
    <img align="left" alt="ISP" width="250px" src="https://miro.medium.com/max/4800/1*aYL1b1xnwmMB2YSKgCWqRg.png" /></br>
    <i>Make fine grained interfaces that are client specific.</i></br>
    <i>Class պետք է կախված չլինեն interface-ից որը չի օգտագործելու կամ որում կան մեթոդնները որոնք այդ Class-ում չեն ռեալիզացվելու</i>
<div>

<div align="center">
    <h3>DIP: The Dependency Inversion Principle</h3>
    <img align="left" alt="DIP" width="250px" src="https://miro.medium.com/max/4800/1*qpdTYuVj4LHvgtmJmnJ1DQ.png" /></br>
    <i>Depend on abstractions, not on concretions.</i></br>
    <i>Կախվածության օբյեկտը, պետք է լինի աբստրակցիա,այլ ոչ թե ինչ-որ կոնկրետ բան</i>
</div>

