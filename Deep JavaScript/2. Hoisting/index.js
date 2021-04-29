/**
 * @Parser
 * @Global @Local ( @Block )
 * @hoisting Դա Js 'interprete'-ի աշխատանքի այն ֆազան է երբ հանդիպելով հատուկ բառերին(@const @let @var @function ... )
    դրանք բարձրանում(հայտարարվում) են կոդի վերին հատված, չըփոխելով կոդի կառուցվածքը։ Ինչու?։
    - Իրականում "բարձրացում" տեղի չի ունենում:
    - Որպիսզի օպերացիոն համակարգին նախապես տեղեկացնի ծրագրի աշխատանքի համար անհրաժեշտ հիշողությունը այդ թվում
      ռեզերվային կամ բուֆերային @swap . Գաղափարը սրանում է։
 *@use_stract hoisting տեղի չի ունենում․ (Չի կարող չունենալ, այդպիսի տպավորություն է ստեղծվում)
 *@Underfined - Հայտարարված է բայց չունի արժեք։
 *@ReferenceError - Ոչ հայտարարված է ոչ էլ ունի արժեք @not_defined
 *
 *@ECMAScript_6 @let և @const դեպքում @hoisting տեղի է ունենում բայց մեկ տարբերությամբ որ փոփոխականներին ոչինչ չի հայտարարագրվում և մինչև ինչ-որ
    արժեք հայտարարելու պահը նրանց( @let @const ) կանչելը կտա @ReferenceError @Temporal_Dead_Zone
    Պարզաբանում @ECMAScript_6 իրենից ներկայացնում է @Syntactic_Sugar @ECMAScript_5
    Պատճառը @V8 -ի ապառատային մասում, օպերացիոն համակարգի բազային կոնցեպտների implement էր engin-ի մեջ։  @V8 իրեն դրսեվորում է որպես
    @ԿեղծՕպերացիոնՀամակարգ @FakeOS
 *@Lexical_Envorinment @Varibal_Envorinment
 */

// var name = 'undefined' Իրականում
console.log(name); // undefined
var name = "Gvenik";

printName("Gven");
function printName(name) {
    console.log(`My name is ${name}`);
}

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 11;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 3;

console.log('1_Name', name1); // ReferenceError: name1 is not defined
if (1) {
    console.log('2_Name', name1); // ReferenceError: Cannot access 'name1' before initialization
    let name1 = 'Gven';
}