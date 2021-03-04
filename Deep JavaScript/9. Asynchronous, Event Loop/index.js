
/**
 * @Asynchronous - @Scroll
 * @Steck
 * @Return 
        1: Print 1
        2: Print 2
        3: Print 3
        4: Print 4
 */

console.log("Print 1"); 
console.log("Print 2");

setTimeout(() => {
    console.log("Print 4")
}, 0); // 0վ հետո*, 

console.log("Print 3")

/**
 * @BreakingChange Node vession(11-12) Event Loop for Timers & Microtasks
 * Փոխվել է դրանց աշխատանքը։ Promise(Microtask), setTimeout(Timer)
 * @nvm
 * @Return v12.13.0 1: Time
                    2: Time
                    3: Promise Resolve
                    4: Time
                    5: Time
 *@Return v10.16.3  1: Time
                    2: Time
                    5: Time
                    4: Time
                    3: Time Promise Resolve
 */

setTimeout(() => console.log('1: Time'));
setTimeout(() => {
    console.log('2: Time');
    Promise.resolve().then(() => console.log('3: Promise Resolve'));
});
setTimeout(() => console.log('4: Time'));
setTimeout(() => console.log('5: Time'));

/**
 * @Event Loop
 * @Link http://latentflip.com/loupe
 */