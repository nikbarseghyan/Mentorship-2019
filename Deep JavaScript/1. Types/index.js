/**
 * @ECMAScript ստանդարտը սահմանում է 8 տեսակ(բաժանված 2 կատեգորիաների).
 * @Primitve_type `@Undefined @Boolean @Number @String @BigInt @Symbol @Null ․JS-ում primitve տիպերը չունեն հատկություններ և մեթոդներ(դա ունի միայն @Object )։
            Բայց դիմելով primitve տիպերին տեսնում ենք որ նրանք հատկություններ ուննեն։ @Boxing JS-ում ստեղծում է ժամանակավոր Primitive Object()
 * @Object_type ` @Object @Function: Հիշողության բաժին է, որի վրա կարելի է հղվել idetificator-ի օգնությամբ։
 * @Weakly_typing @Dynamic_typing Դա նշանակում է որ կարիք չկա նախապես հայտարարել փոփոխականի տիպը(թեպետ չկա մեխանիզմ դա անելու @TypeScript )։ 
            Տիպը որոշվոմ է ծրագրի աշխատանքի ընթացքում։ Հայտարարված փոփոխականն կարելի է վերահայտարարել մեկ այլ տեսակի*
 * 
 * @Strongly_typing
 */
//////////////////////////////////////////////////////!
/**
 *@Undefined Փոփոխական որին ոչինչ հայտարարված չէ։
 */
var nu;

/**
 *@Boolean Տրամաբանական տիպ։ Ունի 2 արժեք՝ @true @false
 * 
 */
const bool = true || false;

/**
 *@Number
 *(+-)@Infinity @NaN
 */
const num  = 123 / +0 // -Infinity
const num1  = 123 / -0 // Infinity

/**
 *@String Տեքստային տվյալներ։
 */

/**
 *@BigInt Իրենից ներկայացնում է 2**53
 */
const bigInt = 18241924124n;

/**
 * @Symbol Եզակի և անփոփոխ( @immutable ) տիպ որը հաճախ օգտագործվում է որպես բանալի։
 */

/**
 * @Object *
 */

/**
 * @Function *
 */