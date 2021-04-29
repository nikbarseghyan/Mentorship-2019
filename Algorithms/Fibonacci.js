/**
 * @Ֆիբոնաչիի_թվեր կամ @Ֆիբոնաչիի_հաջորդականություն , թվային հաջորդականություն, որում առաջին երկու թվերն են 0 և 1,
 * իսկ յուրաքանչյուր հաջորդ թիվը հավասար է նախորդ երկու թվերի գումարին։
 * @Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * Ֆիբոնաչիի թվերի հերթականությունը որոշվում է հետևյալ կերպ՝
    Fo = 0
    F1 = 1
    Fn = Fn-1 + Fn-2
 * 
 * @While_Loop_Time_Complexity O(N)
 * @Recursion_Time_Complexity O(2^N) O(exp^n) Ժամանակը @exp աճելու է n-ից
 */

function fibo(index) {
    if(index <= 1 ) return index;

    return fibo(index - 1) + fibo(index - 2);
}

function fibonacci(num){
    let a = 1, 
        b = 0, 
        temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

console.log(fibo(1), fibonacci(0))


const fib2 = n => {
    if(n == 0){
      return [0, 1];
    }else{
      const [prev, next] = fib2(n - 1);
      return [next, prev + next];
    }
  }
  
  const fib = n => fib2(n)[0];
  console.log(fib(1))