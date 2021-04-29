/**
 * @Ֆակտորիալ (արտադրիչ, բազմապատկիչ), մեկից մինչև տրված որևէ n բնական թիվը եղած բոլոր բնական թվերի արտադրյալը՝ n!=1 * 2 * 3 ․․․ n, նշանակվում է ո!։
 * @param {*} num 
 * @returns 
 */
const factorial = num => {
    let result = 1

    while(num != 1) {
        result *= num 
        num -=1
    }
    return result
}

console.log( factorial(5) );