/**
 * @Error_Hendling
 * 
 * @JavaScript -ը շատ ներկառուցված կոնստրուկտորներ ունի ստանդարտ սխալների համար @Error @SyntaxError @ReferenceError @TypeError ...
 * 
 * @try_catch_finally Սխալների մշակման ամենապարզ և հաճախ օգտագործվող միջոցն է։
 * @finally Ոչ պարտադիր բլոկ։ Պատահում է որ ինչ-որ @code պետք է կատարվի` անկախ այն բանից` սխալ է տեղի ունեցել, թե ոչ:
 * 
 * @throw Ինստրուկցիան կարող է գեներացնել բացառություններ(@exeption ) պարունակող արտահայտություններ։ Script-ի աշխատանքը
 * կդադարի այն պարագայում եթե սխալների ուղղման համար միջոցներ չձեռնարկվեն։
 * 
 * @DOMException @DOMError
 */

function foo () { 
    if (goo()) { 
        throw ( new Error('The message') );
    } else {
        boo(); 
    } 
} 
        
try { 
    foo();
} catch (e) {
    console.log(e.name);
} finally {
    console.log('Ol')
}

/**
 * @throw 
 */

let ref = new ReferenceError(message);
let type = new TypeError(message);

if(params) {
    throw new SyntaxError('Syntax error - Alloooo')
}

/**
 * @Error Օրինակ
 * 
 * @name Տողը սխալի անվանմամբ։
 * @message Մարդու կողմից ընթերցվող հաղորդագրություն։
 * @stack Ստեկը սխալի պահին(ոչ ստանդարտ, բայց լավ մշակվող):
 */
const error = new Error('This is error')
console.log(error.message)

/**
 * @Async_Function Օրինակ
 */

(async function() {
    try {
        await throwError() //Մշակող ֆունկցիա
    } catch (error) {
        console.error(error)
    }
    console.log('Simple Error Handler')
})()

asyncfunc(item, (err, res) => {
    if (err) return console.log(`Urrra ${err}`)
    console.log(res)
})

/**
 * @Custom_Error Օրինակ
 */

class UseError extends Error {
    constructor(message, status = 500, ...params) {
        super(...params)

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, UseError)
        }
        this.message = message
        this.status = status
    }
}

// export/import
// put, delete, get, post
const METHOD = req => {
    try {
        throw new Error('Internal Error')
    } catch (error) {
        console.error(error)

        throw new UseError('NOT_FOUND', 400, 'Այստեղ կարող է լինել ձեր սխալը')
    }
}