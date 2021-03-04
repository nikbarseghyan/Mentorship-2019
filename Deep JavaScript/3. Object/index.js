/**
 * @Object դա կարգավորված կամ չըկարգավորված հատկությունների և մեթոդնների ամբողջականություն է, որտեղ բոլոր հատկությունները ունեն իրենց
 * բնութագրիչները, անվանումները և մեթոդնները։ Ապարատային տեսանկյունից հիշողության բաժին է որի վրա հղում կա։ @Object -երը օգտագործվում 
 * են նաև տարբեր արժեքների և ավելի բարդ հավաքածուներ պահելու համար:
 * Բելոր @Object -ը JavaScript-ում համարվում են object.prototype-ի clon-երը։
 * @delete @in @for_in
 */

let obj = new Object(), // Կոնստրուկտոր
    obj1 = {}; // Լիտեռալ

const root = {
    name: 'Valodik',
    age: '45',
    isHuman: true
}
root.country = "Armenia";
//Delet
delete root.isHuman;
//in
console.log('age' in root, 'lname' in root) //true false

for(let key in root) {
    console.log(key) //return key
}
