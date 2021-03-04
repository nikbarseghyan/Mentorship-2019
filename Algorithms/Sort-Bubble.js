/**
 * ! Պղպջակային տեսակավորում: տեսակավորման պարզ ալգորիթմ, որը կարգավորում է զանգվածը շարունակաբար անցնելով 
 * ! զանգվածի վրայով և տեղերով փոխանակելով սխալ հերթականթյամբ շարված հարևան էլեմենտները:
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%8A%D5%B2%D5%BA%D5%BB%D5%A1%D5%AF%D5%A1%D5%B5%D5%AB%D5%B6_%D5%BF%D5%A5%D5%BD%D5%A1%D5%AF%D5%A1%D5%BE%D5%B8%D6%80%D5%B8%D6%82%D5%B4
 */

const array = [1,9,2,3,7,6,4,5,556,1024,31,96,73];

const bSort = array => {
    let len = array.length;
    
    for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

console.dir( bSort(array) );