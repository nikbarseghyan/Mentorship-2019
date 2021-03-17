# Big O Notation.

<div>
    <p> Օ-Մեծ(Big O) </p>
    <div>
        Անհրաժեշտ է ալգորիթմների բարդությունը նկարագրելու համար։ Դրա համար օգտագործվում է ժամանակի հասկացությունը(Time Complexity):
        Ալգորիթմների ասիմտոտիկական բարդությունը ներկայացնում է ծրագրի կատարման ընթացքում ժամանակի և հիշողություն 'ծախսը':
        Little O - o(), Omega - Ω() ,Theta - Θ():
    </div>
</div>

<div>
    <p>Մտածելով Օ-Մեծի տերմիններով</p> 
    <ul>
        <li>Ստանալ էլեմենտը հավաքածուից(colection) դա - O(1)։ Անկախ նրանից, թե ստանում ենք ինդեքսով զանգվածից թե բանալիով, դա կլինի O(1) </li>
        <li>Ցիկլ պտտվել հավաքածուի(colection) վրա - O(n)</li>
        <li>Ներդրված ցիկլեր պտտվել հավաքածուի(colection) վրա - O(n^2) </li>
        <li>Բաժանիր և տիրիր(Divide and Conquer) - O(log n) </li>
        <li>Իտեռացիան որն օգտագործում է Divide and Conquer - O(n * log n) </li>
    </ul>
</div>
<!--  -->

### Ժամանկային բարդությունը (Time complexity)

Այն մեզ թույլ է տալիս խոսել այն մասին, թե ինչպես է աճում ալգորիթմի կատարման ժամանակը, երբ մուտքային տվյալները աճում են:<br />

n = Գործողությունների քանակը, որոնք համակարգիչը պետք է կատարի։<br />
f(n) = n, <br />
f(n) = n^2, <br />
f(n) = 1, <br />

![](./assets/ece920b.png)

<h5>O(n) (order n)</h5>
<p>
    Որքան մեծ է զանգվածը, այնքան շատ է գործաղոււթյունները։ Այս տեսակի ալգորիթմը անվանում են՝ «գծային» 
</p>

```javascript
    const array = [1,2,3,4,5];
    let sum = 0;
    for(let num of array){
        sum += num;
    }

```

```typescript
function addUpToSimple(n: number) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}
```

O(1):
<p>
    Քանի՞ գործողություն կպահանջվի, եթե զանգվածն ունի 100 տարր: Կամ 1 000 կամ՞ 100 000:<br />
    Միևնույնէ անհրաժեշտ է մեկ իտեռացիա։ Այս ալգորիթմները ամենաարդյունավետն է։
</p>

```javascript
    const nums = [1,2,3,4,5];
    const firstNumber = nums[0]
```

```typescript
function addUpComplex(n: number) {
    return (n * (n + 1)) / 2;
}
```

O(n):

```typescript
function printUpAndDown(n: number) {
    console.log("Going up");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("Going down");
    for (let j = n - 1; j > 0; j--) {
        console.log(j);
    }
}
```

O(n^2)

```typescript
function printAllPairs(n: number) {
    for (let i = 0; i < n; i++) {
        console.log(i);
        for (let j = 0; j < n; j++) {
            console.log(j);
        }
    }
}
```

O(n): Քանի որ հենց n աճում է հետևաբար աճում է բարդությունն։

```typescript
function logAtLeastFive(n: number) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
```

O(1)

```typescript
function logAtMostFive(n: number) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
```
### Հիշողության բարդություն (Location Complexity or Space complexity)

- Պարզունակ տեսակները՝ booleans, numbers undefined, null-ը,  հաստատուն տարածություն են ղբաղեցնում RAM-ում։
- Strings, reference types, objects, arrays - պահանջում են O(n) տարածություն

O(1)

```typescript
function sum(arr: number[]) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
}
```

O(n)

```typescript
function double(arr: number[]) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i] * 2);
    }
    return newArr;
}
```
### Object, Array -> Big O:

object:

```typescript
const person = { name: "John", age: 22, hobbies: ["reading", "sleeping"] };

Object.keys(person); // ["name", "age", "hobbies"] O(n)
Object.values(person); // ["John", 22, Array(2)] O(n)
Object.entries(person); // [Array(2), Array(2), Array(2)] O(n)
person.hasOwnProperty("name"); // true O(1)
```

array:
<p>
push() և pop() ավելի արագ են քան՝ unshift() և shift() քանի որ՝ զանգվածի սկզբից տարր ավելացնելն կամ հեռացնելն հանգեցնում է բոլոր տարրերի նոր ինդեքսավորումանը։
</p>

### Հաճախականության հաշվիչ (Frequency counter)

O(n^3)

```typescript
function same(arrOne: number[], arrTwo: number[]): boolean {
    if (arrOne.length !== arrTwo.length) {
        return false;
    }
    for (let element of arrOne) {
        // for O(n)
        if (!arrTwo.includes(element ** 2)) {
            // includes cuz iterate over all indexes O(n)
            return false;
        }
        arrTwo.splice(arrTwo.indexOf(element ** 2), 1); // indexOf cuz iterate over all indexes O(n)
    }
    return true;
}
```

frequencyCounter:

O(n)

```typescript
function same(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        const sqrtKey = parseInt(key, 10) ** 2;
        if (
            !(sqrtKey in frequencyCounter2) || // interesting ** in ** check if object contains key
            frequencyCounter2[sqrtKey] !== frequencyCounter1[key]
        ) {
            return false;
        }
    }

    return true;
}
```

O(n)

```typescript
// approach one
function validAnagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyCount1 = {},
        frequencyCount2 = {};

    for (let value of str1) {
        frequencyCount1[value] = (frequencyCount1[value] || 0) + 1;
    }
    for (let value of str2) {
        frequencyCount2[value] = (frequencyCount2[value] || 0) + 1;
    }

    for (let key in frequencyCount1) {
        if (frequencyCount1[key] !== frequencyCount2[key]) {
            return false;
        }
    }

    return true;
}

// approach two
function validAnagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyCount = {};

    for (let i = 0; i < str1.length; i++) {
        const currentElement = str1[i];

        frequencyCount[currentElement]
            ? (frequencyCount[currentElement] += 1)
            : (frequencyCount[currentElement] = 1);
    }

    for (let i = 0; i < str2.length; i++) {
        const currentElement = str2[i];

        if (!frequencyCount[currentElement]) {
            return false;
        } else {
            frequencyCount[currentElement] -= 1;
        }
    }

    return true;
}
```
### Բազմակի ցուցիչներ (Multiple pointers)

O(n^2)

```typescript
function sumZero(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
```

multiple pointers:

O(n)

```typescript
function sumZero(arr: number[]) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
```

O(n)

```typescript
// my approach
function countUniqueValues(arr: number[]): number {
    let pointer = 0;
    let count = 0;
    while (pointer < arr.length) {
        if (arr[pointer] === arr[pointer + 1]) {
            pointer++;
        } else {
            count++;
            pointer++;
        }
    }

    return count;
}

// steele approach
function countUniqueValues(arr: number[]): number {
    if (arr.length === 0) {
        return 0;
    }

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
```

### Sliding window

O(n^2)

```typescript
function maxSubArraySum(arr: number[], n: number): number | null {
    if (arr.length < n) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - n + 1; i++) {
        let tmp = 0;
        for (let j = 0; j < n; j++) {
            tmp += arr[i + j];
        }

        if (tmp > max) {
            max = tmp;
        }
    }
    return max;
}
```

O(n)

sliding window:

```typescript
function maxSubArraySum(arr: number[], n: number): number | null {
    if (arr.length < n) return null;
    
    let maxSum = 0,
        tmpSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    for (let i = n; i < arr.length; i++) {
        tmpSum = tmpSum - arr[i - n] + arr[i];
        maxSum = Math.max(tmpSum, maxSum);
    }
    return maxSum;
}
```

### Բաժանիր և տիրիր (Divide and Conquer)

linearSearch

O(n)

```typescript
function linearSearch(arr, val): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}
```

divide an conquer: binarySearch O(Log n)

```typescript
function binarySearch(sortedArr: number[], value: number): number {
    let min = 0,
        max = sortedArr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        if (sortedArr[middle] < value) {
            min = middle + 1;
        } else if (sortedArr[middle] > value) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
```

### Ռեկուրսիա (Recursion)

Գործընթաց, որն ինքն իրեն կանչում է, մինչ որևէ պայման կկանգնեցնի այդ շխթան։

```typescript
function wakeUp() {
    // callStack [wakeUp]
    takeShower();
    eatBreakfast();
    console.log("Ready to go ... ");
} // callStack []

function takeShower() {
    // callStack [takeShower, wakeUp]
    console.log("taking shower");
} // callStack[wakeUp]

function eatBreakfast() {
    // callStack [eatBreakfast, wakeUp]
    const meal = cookBreakFast();
    console.log(`eating ${meal}`);
} // callStack [wakeUp]

function cookBreakFast() {
    // callStack [cookBreakFast, eatBreakfast, wakeUp]
    const meals = ["Cheese", "Protein Shake", "Coffee"];
    return meals[Math.floor(Math.random() * meals.length)]; // callStack [eatBreakFast, wakeUp]
}

wakeUp();
```

ռեկուրսիվ գործառույթների երկու էական մասը`

-   բազային դեպք- տողի վերջը
-   տարբեր մուտքագրում- ռեկուրսիան պետք է հղվի զանգի այլ տվյալների վրա

```typescript
function sumRange(num: number) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

function factorial(num: number) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
```

Recursion vs Pure Recursion

```typescript
// helper method recursion approach
function collectOdd(arr: number[]) {
    const result = [];

    function helper(helperArr: number[]) {
        if (!helperArr.length) {
            return;
        }

        if (helperArr[0] % 2 !== 0) {
            result.push(helperArr[0]);
        }

        helper(helperArr.slice(1));
    }

    helper(arr);

    return result;
}

// pure recursion approach
function collectOdd(arr: number[]): number[] {
    let result = [];

    if (!arr.length) {
        return result;
    }

    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }

    result = collectOdd(result.concat(arr.slice(1)));
    return result;
}
```

## Որոնման ալգորիթմներ (Searching Algorithms)

### Գծային որոնում (Linear Search)

indexOf() includes() find() findIndex() -> Այս բոլոր մեթոդները գծային որոնում են կատարում։

O(n)

```typescript
function linearSearch(arr: number[], value: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
        return -1;
    }
}
```

### Բինար որոնում (Binary search)

O(Log n)

```typescript
function binarySearch(sortedArr: number[], value: number): number {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        const middle = Math.round((right + left) / 2);

        if (sortedArr[middle] > value) {
            right = middle - 1;
        } else if (sortedArr[middle] < value) {
            left = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}
```

### Naive string search

O(n^2)

```typescript
function naiveStringSearch(long: string, pattern: string): number {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== long[i + j]) {
                break;
            }
            if (j === pattern.length - 1) {
                count++;
            }
        }
    }

    return count;
}
```

## Տեսակավորում Ալգորիթմներ (Sorting Algorithms)
### Array.sort()

array.sort(cb)

```typescript
["a", "c", "b", "f", "d"].sort(); // (5) ["a", "b", "c", "d", "f"]
[1, 10, 6, 8, 2, 3, 5].sort(); //(7) [1, 10, 2, 3, 5, 6, 8]

/* 
also receive callback function by two arguments:
    a: previous number 
    b: next number 

*/
// if callback return NEGATIVE number a will placed before b
[1, 10, 6, 8, 2, 3, 5].sort((a, b) => a - b); // (7) [1, 2, 3, 5, 6, 8, 10]

// if callback return POSITIVE number a will placed after b
(7)[(1, 2, 3, 5, 6, 8, 10)].sort((a, b) => b - a); // (7) [10, 8, 6, 5, 3, 2, 1]

// if callback return ZERO a and b will placed at the same position
```

## Քառակուսային (Quadric)

### Պղպջակային տեսակավորում (Bubble sort)

![](./assets/Sorting_bubblesort_anim.gif)

general: O(n^2)
nearlySortedData: O(n)

```typescript
function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let noSwap = true;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

// կամ

function bubbleSort(arr: number[]): number[] {
    for (let i = arr.length; i > 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}
```

### Ընտրության տեսակավորումը (selection sort)

![](./assets/Selection-Sort-Animation.gif)

O(n^2)

```typescript
function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
```

### Ներդրմամբ տեսակավորում (Insertion sort)

![](./assets/Insertion-sort-example-300px.gif)

general: O(n^2)
nearlySortedData: O(n)

```typescript
function insertionSort(arr) {
    var currentVal;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
```

### Քառակուսային տեսակավորման ալգորիթմների համեմատությունը

|   Algorithm    | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :------------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
|  bubble sort   |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| insertion sort |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| selection sort |         O(n^2)         |          O(n^2)           |         O(n^2)          |       O(1)       |

## Fancy (Լավ, Հիասքանչ)

### Միաձուլման տեսակավորում (Merge sort)

![](./assets/Merge-sort-example-300px.gif)

O(n Log n)

```typescript
// merge two sorted array
function merge(arr1: number[], arr2: number[]): number[] {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}
```

### Արագ տեսակավորում (Quick sort)

![](./assets/Quicksort.gif)

general: O(n Log n)
sorted: O(n^2)

```typescript
// place pivot in the right index and return pivot index
function pivot(arr: number[], start = 0, end = arr.length - 1) {
    const pivot = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            pivotIndex++;
            [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
}

function quickSort(arr: number[], start = 0, end = arr.length - 1) {
    if (left < right) {
        const pivot = pivot(arr, start, end);

        // left
        quickSort(arr, start, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, end);
    }

    return arr;
}
```

### Radix sort

![](./assets/3C7DDB59DF2D21B287E42A7B908409CB.gif)

O(nk)
n: քանակը, որոնք մենք տեսակավորում ենք
k: միջին երկարությունը

```typescript
// get the actual number at the given index
function getDigit(num: number, i: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// get number length
function digitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// return number by most length
function mostDigits(arr: number[]): number {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}
function radixSort(arr: number[]): number[] {
    let maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            digitBuckets[getDigit(arr[j], k)].push(arr[j]);
        }

        arr = [].concat(...digitBuckets);
    }
    return arr;
}
```

### Fancy տեսակավորման ալգորիթմների համեմատությունը

| Algorithm  | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :--------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
| merge sort |       O(n Log n)       |        O(n Log n)         |       O(n Log n)        |       O(n)       |
| quick sort |       O(n Log n)       |        O(n Log n)         |         O(n^2)          |     O(Log n)     |
| radix sort |         O(nk)          |           O(nk)           |          O(nk)          |     O(n + k)     |

## Դինամիկ ծրագրավորում (Dynamic Programming, light introduction)

Դա բարդ խնդիրներ լուծելու մեթոդ է `դրանք բաժանելով ավելի պարզ խնդիրների հավաքածուի, լուծելով դրանց ենթախնդիրները մեկ անգամ և պահպանելով դրանց լուծումները:

### Example Fibonacci sequence

Առանց դինամիկ ծրագրավորման. Ռեկուրսիվ

**In fibonacci sequence fib(n) = fib(n-2) + fib(n-1) && fin(1) = 1 && fib(2) = 1**

**O(2^n)**

```typescript
function fib(n: number): number {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
```

![](./assets/2-Figure3.1-1.png)

Ինչպես տեսնում ենք, մենք f(5) երկու անգամ հաշվարկում ենք, որը բավականին էֆեկտիվ չէ։

### Memorization

O(n)

```typescript
function fib(n: number, memo: number[] = []): number {
    if (memo[n]) return memo[n];

    if (n <= 2) return 1;

    const res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;

    return res;
}
fib(10000); // Maximum callStack exceeded
```

### Tabulation

```typescript
function fib(n: number): number {
    if (n <= 2) return 1;

    const fibNumbers = [0, 1, 1];

    for (let index = 3; index <= n; index++) {
        fibNumbers[index] = fibNumbers[index - 1] + fibNumbers[index - 2];
    }

    console.log(fibNumbers);

    return fibNumbers[n];
}
fib(10000); // Infinity
```