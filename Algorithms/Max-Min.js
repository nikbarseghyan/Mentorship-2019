
let array = [66,5,96,35,78,15,36,58,43,41,68,91,101,37,3,9,55,126];

const funcMax = array => {
    let lenght = array.length,
        max = -Infinity;
    while(lenght--) {
        if(array[lenght] > max) {
            max = array[lenght] 
        } 
    }
    return max;
}

const funcMin = array => {
    let lenght = array.length,
        min = Infinity;
    while(lenght--) {
        if(array[lenght] < min) {
            min = array[lenght] 
        } 
    }
    return min;
}

console.log(funcMax(array), funcMin(array))

// or Elegant

const _max = array => Math.max(...array)
const _min = array => Math.min(...array)

console.log(_max(array), _min(array));