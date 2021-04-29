/**
 * @Data_structur -> @Array
 * @Array_Method
 */
const stack = ['FrontEnd', 'BackEnd', 'DevOps', 'SRE', 'QA', 'UX/UI'];
const pm = ['Product Manager']
// stack.length // 6 Զանգվածում էլեմենտների քանակ

// stack.push('PrincipalEngineer') // Զանգվածի վերջում ավելացնում է նոր էլեմենտ և վերադարձնում նոր զանգվածը:

// stack.pop() // Հեռացնում զանգվածի վերջին տարրը:

// stack.shift() // Զանգվածի առաջին էլեմենտի հեռացում։

// stack.unshift('PrincipalEngineer') // Զանգվածի սկզբից ավելացնում է նոր տարրը։

// stack.join('+') // FrontEnd+BackEnd+DevOps+SRE+QA+UX/UI Միավորում է զանգվածի բոլոր տարրը։

// stack.splice(2,0,'PrincipalEngineer') // Ավելացնում կամ հեռացնում է տարրը զանգվածից։

// stack.indexOf('DevOps') // Հետ է վերադարձնում տվյալ տարրի ինդեքսը։

// stack.includes('DevOps') // Հետ է վերադարձնումմ true/false եթե փնտրվող տարը կա մեր զանգվածում։

// stack.lastIndexOf('Deno.lend') // Նման է indexOf-ին չըգտնելու դեպքում հետ է վերադարձնում -1։

// stack.concat(pm) // Հետ է վերադարձնում նոր զանգված որում միավորված են տարբեր զանգվածներ։

// stack.toString() // Հետ է վերադարձնում տարրերի string-ը

// stack.reverse() // Շրջում է տարրերի հերթականությունը առաջինը դառնում է վերջինը իսկ վերջինը՝ առաջին։

// stack.copyWithin() // Պատճենում է զանգվածի տարրերի հաջորդականությունը զանգվածում

// stack.fill('IT Department') // Փոխարինում է զանգվածի բոլոր տարրերը մուտքային տվյալով։

// stack.sort() // Զանգվածի տարրերը տեսակավորում է տեղում և վերադարձնում տեսակավորված զանգվածը:

// Array.from() // Ստեղծում է Array-ի նոր օրինակ, զանգվածանման կամ փոփոխվող օբեկտներից։

// Array.isArray() // true/false Ստուգում ենք տվյալը Array է թե ոչ։

// Array.observe() // Ասինխրոն հատեվում ենք Array-ի փոփոխություններին։

// Array.of() // Ստեղծում է Array-ի նոր օրինակ անկախ արգումենտների քանակից