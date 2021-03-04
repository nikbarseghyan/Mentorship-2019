/**
 * @Composition Դա պարզ ֆւոնկցիանների ամբողջականությունն է։ Ավելի բարդ համադրությամբ։
 * 
 * @OOP_Inheritance
 * @Vue_3
 */

const programmer = name => {
    const init = {name}
    return { ...init, ...front(init)}
}

const front = ({name}) => {
    return {
        rc: () => console.log(`I'm ${name} and I am a programmer and I know React  `),
        ng: () => console.log(`I'm ${name} and I am a programmer and I know Angular`)
    }
}
const back = ({name}) => {
    return {
        go:   () => console.log(`I'm ${name} and I am a programmer and I know Go.lend`),
        node: () => console.log(`I'm ${name} and I am a programmer and I know Node.js`),
    }
}

const backDev = (name) => {
    const init = programmer(name)
    return {...init, ...back(init)}
}

const fullStake = name => {
    const init = programmer(name)
    return {...init, ...back(init), ...front(init)}
}

let frontEnder, backEnder, fullEnder;
/////////////////////////////////////////////////////////////////////////
frontEnder = programmer('Valodik Voskanyan')
frontEnder.rc();
/////////////////////////////////////////////////////////////////////////
backEnder = backDev('Serobik Ayvazyan')
backEnder.go()
backEnder.node();
/////////////////////////////////////////////////////////////////////////
fullEnder = fullStake('Ferdinand Musaelyan')
fullEnder.go()
fullEnder.ng()
fullEnder.rc()
fullEnder.node()