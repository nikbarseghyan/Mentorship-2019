# Big O Notation.

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhmflwpYAagTV4k3WKz3Lj3BH8i0pvc63jA&usqp=CAU)

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

<div>
    <h5> O(1) (order 1)</h5>
    <p>
        Քանի՞ գործողություն կպահանջվի, եթե զանգվածն ունի 100 տարր: Կամ 1 000 կամ՞ 100 000:
        Միևնույնէ անհրաժեշտ է մեկ իտեռացիա։ Այս ալգորիթմները ամենաարդյունավետն է։
    </p>

    ```sh
    const nums = [1,2,3,4,5];
    const firstNumber = nums[0]

    ```

<h5>O(n) (order n)</h5>
<p>
    Որքան մեծ է զանգվածը, այնքան շատ է գործաղոււթյունները։ Այս տեսակի ալգորիթմը անվանում են՝ «գծային» 
</p>

    ```sh

        const array = [1,2,3,4,5];
        let sum = 0;
        for(let num of array){
            sum += num;
        }

    ```

<h5>O(n^2) polynomial</h5>

    ```sh

        const hasDuplicates = function (num) {
            for (let i = 0; i < nums.length; i++) {
                const thisNum = nums[i];
                for (let j = 0; j < nums.length; j++) {
                    if (j !== i) {
                        const otherNum = nums[j];
                        if (otherNum === thisNum) return true;
                    }
                }
            }
            return false;
        }

        const array = [1, 2, 3, 4, 5, 5];
        hasDuplicates(array);

    ```
<h5>O(n^2) -> O(log n)</h5>

    ```sh

        const nums = [1, 2, 3, 4, 5];
        const searchFor = function (items, num) {}
        const hasDuplicates = function (nums) {
            for (let num of nums) {
                if (searchFor(nums, num)) {
                    return true;
                }
            }
            return false;
        }

    ```

</div>