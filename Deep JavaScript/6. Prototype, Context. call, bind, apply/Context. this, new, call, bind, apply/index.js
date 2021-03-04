/**
 * @Execution_Context սա կոնցեպցիա է, որը նկարագրում է միջակայքը որում պետք է մշակվի JavaScript Code-ը։
 * Code-ը միշտ մշակվում է ինչ-որ context-ում։ Մինչ JavaScript Code-ի աշխատելը ստեղծվում է execution context այդ պրոցեսում
 * ստեղծվում է և կատարվում է 3 գործողություն՝
 * 1) Որոշվում է this արժեքը և իրականացվում է "կապվելը"( @this_binding )
 * 2) Ստեղծվում է @LexicalEnvironment
 * 3) Ստեղծվում է @VariableEnvironment 
 * 
 * @function -ի կոնտեքստում @this -ը կախված է այն բանից, թե ինչպես է ֆունկցիան կանչվել, եթե այն կանչվել է որպես
 * օբեկտի մեթոդ ապա @this -ը "կապված է" այդ օբեկտին։ Մնացած դեպքերում @this -ը "կապված է" @Global_Object -ին(window):
 * "use strict"-ի դեպքում undefined է։
 */

/**
 * @This դա @link է, որը ստեղծվում է ֆունկցիայի կանչի ժամանակ և ինչի վրա է այն հղվում որոշվում է որտեղ և ինչպիսի պայմաններում 
 * է այն կանչվում։
 * 
 * @default (@լռելային ) this հղվում է դեպի window, ամենացածր առաջնահերթությամբ(lowest priority)
 * @evident (@ակնհայտ ) call(), applay() ավելի առաջնահերթ են քան @default -ը։
 * @tough   (@կոշտ ) Function.prototype.bind() հետ էվերադարձնում նոր ֆունկցիա, որտեղ "կոշտ" կանչվում է "օրիգինալ" այն
 *  context-ով որում this է:
 * @new_opertaor Ստեղծում է object-ի էկզեմպլիար։ Կանչում է Class-ի constructor-ը։ Սա միակ միջոցն է, որով this-ը ֆուկցիայի 
 * կանչի ժամանակ կապնվում է object-ին։ Այն կատարում է 3 գործողություն՝
 * ա) Ստեղծում նոր object։
 * բ) Կանչվւոմ է Constructor ֆունկցիան նշված արգումենտներով և this-ը ստանում է հղում այդ object-ին։
 * գ) Որպես արդյունք ստանում ենք օբեկտ։ Եթե ​​կոնստրուկտորը օբյեկտը հստակ չի վերադարձնում, օգտագործվում է օբեկտ .prototype։
 * 
 */

const author  = {
    fullName: "Jan Bodriar",
    date: "06.03.2007",
    book: "Simulacra and Simulation",
    work: function(idea, other) {
        console.log(`Full Name: ${this.fullName}, die: ${this.date}, idea: ${idea}, book: ${this.book}: ${other}`)
    }
}

const author_ = {
    fullName: "Jak Derida",
    date: "09.10.2004",
    book: "Specters of Marx",
}

const author__ = {
    fullName: "Jean-François Lyotard",
    date: "21.04.1998",
    book: "La Posmodernidad",
}

/**
 * @call (ստանւոմ է @object կամ @null եթե կարևոր չէ context-ը, @parametrs ) միանգամից կանչում է ֆունկցիան։
 * @applay (ստանւոմ է @object կամ @null եթե կարևոր չէ context-ը, [ @array_arguments ]) միանգամից կանչում է ֆունկցիան։
 * @bind (ստանւոմ է @object և անսահմանապակ քանակությամբ արգումենտներ) կանչվում է ոչ անմիջապես և հետ է վերադրձնում նոր 
 * ֆւոնկցիա ի ատրբերություն @call -ի ու @applay -ի։
 */

author.work("Philosophy")
author.work.call(author_, "Posmodern")
author.work.call(author__, "Post-Structualizm")

author.work.apply(author_, ["Post-Structualizm", "How disgusting PostModern"])
author.work.call(author_, ...["Post-Structualizm", "How disgusting PostModern"]) // ES-6

author.work.bind(author__, "Post-Structualizm")()
const time = author.work.bind(author__, "Post-Structualizm")
time()

/**
 * Առաջադրանք* 

    const btn = document.getElementById('btn');
    for(var i = 0; i < 5; i++) {
        btn.addEventListener('click', function(ev) {
            console.log(i)
        })
    }
 * Լուծում
    for(var i = 0; i < 11; i++) {
        setTimeout((function(i) {
            console.log(i)
        }).bind(null, i), i*1000)
    }
 */

/**
 * @new
 */

function Row(id, tabel) {
    this.id = id
    this.tabel = tabel
}

const myRow = new Row(36584, 'Row_22')
console.log(myRow)

function useNewOperator(constructor, ...args) {
    const context = {}
    Object.setPrototypeOf(context, constructor.prototype)
    return constructor.apply(context, args) || context
}

const myRow_ = useNewOperator(Row, 36584, 'Row_11')
console.log(myRow_)