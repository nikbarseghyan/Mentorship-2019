/**
 * ! Միաձուլման տեսակավորում: համեմատման վրա հիմնված տեսակավորման ալգորիթմ է:
 * 
 * ! Տվյալների կառուցվածք` O(n)
 * ! Վատագույն դեպքում կատարումը` O(n*log(n))
 * ! Լավագույն դեպքում կատարումը` O(n*log(n))
 * @Link https://hy.wikipedia.org/wiki/%D5%84%D5%AB%D5%A1%D5%B1%D5%B8%D6%82%D5%AC%D5%B4%D5%A1%D5%B6_%D5%BF%D5%A5%D5%BD%D5%A1%D5%AF%D5%A1%D5%BE%D5%B8%D6%80%D5%B8%D6%82%D5%B4
 */

const unsorteArray = [4, 8, 7, 2, 11, 1, 3, 55, 13, 66];

const merge = (left, right) => {
    let arr = [];

    while (left.length && right.length) {

        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ];
}

const mSort = array =>  {   
    if(array.length <= 1 ) return array;
    const half = array.length / 2,
        left = array.splice(0, half);

    return merge( mSort(left), mSort(array) )
}

console.dir( mSort(unsorteArray) );