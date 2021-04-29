/**
 * @Memoization 
 * Քեշավորման բուն նպատակն է, խուսափել պարբերաբար կրկնվող ծանր հաշվողական օպերացիաներից։ 
 */

const cash = func => {
    const cash = {}
    return n => {
        if(cash[n] ) {
            console.log('Cash ==>', cash[n] );
            return cash[n]
        }
        console.log('No Cash ==>', n);
        let res = func(n)
        cash[n] = res
        return res
    }
}

const fibo = num => {
    if(num <= 1 ) return num;
    return fibo(num - 1) + fibo(num - 2);
}

const memoFibo = cash(fibo)

console.log(memoFibo(6))
console.log(memoFibo(7))
console.log(memoFibo(6))
console.log(memoFibo(7))
console.log(memoFibo(8))
console.log(memoFibo(6))
console.log(memoFibo(6))
console.log(memoFibo(6))
console.log(memoFibo(8))