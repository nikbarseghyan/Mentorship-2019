/**
 * ! Ընտրության տեսակավորումը: Տեսակավորուման ալգորիթմ է, մասնավորապես տվյալների համեմատության տեսակավորում է։
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%B8%D5%B6%D5%BF%D6%80%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6_%D5%BF%D5%A5%D5%BD%D5%A1%D5%AF%D5%A1%D5%BE%D5%B8%D6%80%D5%B8%D6%82%D5%B4
 */

const array = [5, 2, 4, 6, 1, 3, 56, 89, 63, 45, 74, 13, 0];

const sSort = array => { 
    let n = array.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++) {
            if(array[j] < array[min]) { min=j }
        }

        if (min != i) {
            let tmp = array[i]; 
            array[i] = array[min];
            array[min] = tmp;      
        }
    }

    return array;
}

console.dir(sSort(array));