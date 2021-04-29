/**
 * @Գածային_որոնում
 */

const array = [12,56,89,87,55,6,44,7,88,56,32,0,78,69,45,75], item = 7;

const linearSerach = (array, item) => {
    array.forEach(elem => {
        if(elem == item) { 
            console.log(`Time Complexcity O(n), Succsess: ${item}`)
            return true;
        }
    });
    return false
}

console.log(linearSerach(array, item));

//or

const _linearSerach = (array, item) => {
    for(elem of array) if (elem === item ) return elem;
    return false
}

console.log(_linearSerach(array, item))