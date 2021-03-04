/**
 * @Higher_Order_Functions Ֆունկցիա է, որը` ֆունկցիան վերցնում է որպես արգումենտ և հետ է վերադարձնում մեկ այլ ֆունկցիա(կամ դրա արդյունքը)․
 * 
 * @HOC Higer-Order-Component
 */

function SumHOF_ES2015(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

const SumHOF = a => b => c => a + b + c;

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // → true