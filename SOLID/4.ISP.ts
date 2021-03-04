/**
 * @ISP  The Interface Segregation Principle
 * 
 * @Module @Class պետք է կախված չլինեն @interface -ից որը չի օգտագործելու։
 * @OOP խնդիրներից մեկը՝․ ժառանգորդը կարող է ստանալ շատ ֆունկցիոնալ որը նա չի օգտագործելու։
 * @Decomposition_interface
 */

interface ISkills {
    getRc(): any;
    getNg(): any;
    getGo(): any;
    getNode(): any;
}

//Բոլոր մեթոդները պետք է ռեալիզացվեն։
class FrontEnd implements ISkills {
    getRc(): any {};
    getNg(): any {};   //Անհրաժեշտ չէ
    getGo(): any {};   //Անհրաժեշտ չէ
    getNode(): any {}; //Անհրաժեշտ չէ
}

//Բաժանեք interface-երը։ 
interface IRc {
    getRc(): any;
}
interface INg {
    getNg(): any;
}
interface INode {
    getNode(): any;
}

class BeckEnd implements INode {
    getNode(): any {}
}