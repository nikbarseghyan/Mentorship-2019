/**
 * @Map Հավաքածուի(Collections key/value) տեսակ է, Object-ի նման: Յուրաքանչուր արժեք այդ թվում(@object @primitiv ) կարող են օգտագործվել որպես @key
 * 
 * @Method {map.set, map.get, map.remove, map.has, map.clear ...}
 * @set @get @has - O(1) O(logN) 
 * @delete - O(1) O(logN)
 * @size @clear
 * @Map կարող է @Object օգտագործել որպես @key .
 * 
 * @keys @values @entries 
 */

// new Map([iterable])

let map = new Map();
map.set("1", "str1");  
map.set(1, "num1");
map.set(true, "bool1");
// Map chaining
// map.set("1", "str1")
//     .set(1, "num1")
//     .set(true, "bool1");

console.log(map);

let john = { name: "John" };
let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john));