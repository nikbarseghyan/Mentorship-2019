/**
 * @Pure_Function Դա ֆունկցիա է, որի միևնույն մուտքային( @input ) տվյալների դեպքում ֆունկցիան հետ է վերադարձնում( @return ) նույն ելքային( @output ) արդյունքը, առանց կողմնակի էֆեկտների( @side_effect )
 * 
 * @Reducer (React /Redux )
 * @Impure_Functions Կողմնակի էֆեկտներ(side effect)` @HTTP_call @Logging @State_mutation @FS_or_Write_to_disk @Etc
 */

const Func = (a,b) => a + b
Func(11,22);  // 33

const FuncSideEffect = () => Math.random() * 1000;
FuncSideEffect() //


const absolutPureFunctions = () => {};

const PureFunction = (a,b) => a * b;
PureFunction(3,5) // 15

const SideEffectFunctionRandom = () => Math.random();
SideEffectFunctionRandom(); // 0.4011148700956255
SideEffectFunctionRandom(); // 0.9045914871095625
SideEffectFunctionRandom(); // 0.0011148700956255

const SideEffectFunctionDate = () => new Date().toLocaleTimeString();
SideEffectFunctionDate() // "8:19:45 PM"
SideEffectFunctionDate() // "8:19:49 PM"