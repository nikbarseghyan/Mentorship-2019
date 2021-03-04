/**
 * ! Կենտ-զույգ տեսակավորումը համեմատաբար պարզ տեսակավորման ալգորիթմ է։
 * ! Այն գործում է՝ համեմատելով ցուցակի բոլոր կենտ, զույգ ինդեքսներով էլեմենտները առանց բացառությունների, 
 * ! և եթե որևէ զույգը սխալ հերթականությամբ է (առաջինը երկրորդից մեծ է), էլեմենտները տեղերով փոխվում են։
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%BF%D5%A5%D5%B6%D5%BF-%D5%A6%D5%B8%D6%82%D5%B5%D5%A3_%D5%BF%D5%A5%D5%BD%D5%A1%D5%AF%D5%A1%D5%BE%D5%B8%D6%80%D5%B8%D6%82%D5%B4
 */

const array = [2, 5, 4, 6, 7, 1, 8, 9, 10, 11, 17],
    isEven = i => i % 2 === 0,
    checked = ((a, b) => {
        if(isEven(a) && !isEven(b)) return -1;
        if(!isEven(a) && isEven(b)) return 1;

        return a - b;
    });

const oeSort = array => array.sort(checked);
console.dir(oeSort(array));