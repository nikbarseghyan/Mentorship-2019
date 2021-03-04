/**
 * ! Ներդրմամբ տեսակավորում: Որը ստեղծում է վերջնական սորտավորված զանգված կամ ցանկ։
 * ! Վատագույն դեպքում կատարումը`  O(n**n)
 * ! Լավագույն դեպքում կատարումը` O(n)
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%86%D5%A5%D6%80%D5%A4%D6%80%D5%B4%D5%A1%D5%B4%D5%A2_%D5%BF%D5%A5%D5%BD%D5%A1%D5%AF%D5%A1%D5%BE%D5%B8%D6%80%D5%B8%D6%82%D5%B4
 */

const array = [5, 2, 4, 6, 1, 3, 11, 36, 58];

const iSort = array => {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let current = array[i],
            j = i-1;

        while ((j > -1) && (current < array[j])) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
    
    return array;
}

console.dir( iSort(array) )