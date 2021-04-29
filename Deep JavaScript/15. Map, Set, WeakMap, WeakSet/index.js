/**
 * @Set @Map ->Data Structure
 */

/**
 * @WeakMap դա @Map -նման հավաքածու է, տարբերությունն այն է, որ WeakMap-ի բանալիները պետք է լինեն օբյեկտներ, ոչ թե պրիմիտվ արժեքներ։
 * Եվ ավտոմատ կերպով ջնջում է դրանք՝ համապատասխան արժեքների հետ միասին, հենց որ դրանք այլ եղանակներով անհասանելի դառնան: 
 * 
 * new WeakMap([iterable])
 * weakMap.get(key)
 * weakMap.set(key, value)
 * weakMap.delete(key)
 * weakMap.has(key)
 * 
*/

let laura = { name: "Laura" };
let weakMap = new WeakMap();
weakMap.set(laura, "...");

laura = null; // վերագրանցում նոր օբեկտի։
// Լաուրա օբեկտը ջնջված է։

/**
  * @WeakSet դա @Set -նման հավաքածու է, որը միայն օբեկտներ է պահում և ջնջում դրանք հենց որ այլ եղանակներով դրանք անհասանելի դառնան:
  * @add @has @delete no support @size @keys
*/

let object = new WeakSet();

let arman = { name: "Arman" };
let petros = { name: "Petros" };
let mary = { name: "Mary" };

object.add(arman); 
object.add(petros); 
object.add(john)