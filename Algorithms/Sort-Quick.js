/**
 * ! Արագ տեսակավորում
 * !O(n**n )
 * !O(n*logn)
 * @Link https://hy.wikipedia.org/wiki/%D4%B1%D6%80%D5%A1%D5%A3_%D5%BF%D5%A5%D5%BD%D5%A1%D5%AF%D5%A1%D5%BE%D5%B8%D6%80%D5%B8%D6%82%D5%B4
 * Արագ տեսակավորում (Quicksort), հիշողության նվազագույն ծախս, ալգորիթմի բարդությունը O(n log n) միջին ժամանակը, O(n2) վատագույն դեպք,
 * լայն տարածում ունի որպես ամենաարագը դասավորելու մեծ պատահական ցանկերի համար՝ բաժանելով 2 մասի սկզբնական տվյալները, 
 * այնպես, որ առաջին կեսի ցանկացած էլեմենտ դասավորված է երկրորդ կեսի ցանկացած էլեմենտի համեմատ։ 
 * Հետո ալգորիթմը օգտագործվում է ռեկուրսիվ ամեն կեսում։ O(n) լրացուցիչ հիշողության դեպքում, կարելի է տեսակավորումը ավելի կայուն անել։
 */

const array = [5,256,98,3,4,6,7,8,63,58,78,23,1];

const qSort = array => {
    if(array.length < 2) {
        return array;
    } else {
        const pivot = array[Math.floor(Math.random() * array.length)],
            less  = array.filter(value => value < pivot),
            great = array.filter(value => value > pivot);

        return [ ...qSort(less), pivot, ...qSort(great) ];
    }
}

console.log(qSort(array));