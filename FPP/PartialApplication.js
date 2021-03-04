/**
 * @Partial_Application Հնարավորություն է տալիս հետ վերադարձնել @Function մեկ այլ @Function -ից։ Հին @Function ստանալ նոր @Function որը մասնակի է կիրառվել։
 * 
 * @Closure
 * @Curring
 * @bind
 */


const sum = (x, y) => x + y,
    curryFunc = sum.bind(null, 2);

console.log(curryFunc(3), curryFunc(4), curryFunc(6)) // 5, 6, 8
/////////////////////////////////////////////////////////////////////////////