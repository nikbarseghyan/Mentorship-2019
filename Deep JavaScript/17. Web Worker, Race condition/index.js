/**
 * @Javascript Դա @Single_Threaded , @Non_Blocking , @Asynchronous , @Coucarrent լեզու է։
 * @node_v12
 * @node_v14 
 */

/**
 * @V8
 * @Memory_Heap *
 * @Call_Stack * 
 */

/**
 * @WebWorker Սա մեխանիզմ է, որը թուլ է տալիս @script -ը աշխատացնել ֆոնային հոսքում(@thread ) հիմնական հոսքից անկախ։ Առավելությունը նրանում է,
 * որ եթե ունենք ծանր գործողություններ(հաշվարկներ @cpu_intensive_procces ) բաժանում ենք հոսքերի միջև և թույլ ենք տալիս հիմնական հոսքին աշխատել
 * առանց բլոկավորման և հապաղման։
 * @Worker -ները գործարկվում են մեկ այլ գլոբալ կոնտեքստում որը տարբերվում է ներկա կոնտեքստից @window : հատուկ սպեցիֆիկ @Worker -ի դոպքում՝
 * @DedicatedWorkerGlobalScope իսկ սովորական դեպքերում @SharedWorkerGlobalScope
 * 
 * @SharedWorker
 * @ServiceWorkers
 * @Subworkers
 * 
 * @postMessage
 */

const worker = new Worker("worker.js");

first.onchange = function() {
    myWorker.postMessage([first.value,second.value]);
    console.log('Message posted to worker');
}

second.onchange = function() {
    myWorker.postMessage([first.value,second.value]);
    console.log('Message posted to worker');
}

/**
 * @Race_Condition Նախագծման թերություն, @Multy_Threaded բազմահոսք համակարգում կամ ծրագրում, որի արդյունքում համակարգի կամ ծրագրի
 * աշխատանքը կախված է թե ինչպիսի հերթականությամբ կկատարվի կոդի մասերի աշխատանքը։ Սա թերություն է, որը տեղի է ունենում, 
 * երբ իրադարձությունների ժամանակացույցը կամ կարգը ազդում է ծրագրի ճիշտության վրա:
 * @Race_Condition -ները կարող են անկանխատեսելի արդյունքներ տալ և հաճախ դժվար է հայտնաբերել։ Խուսափելու համար 
 * պետք է լավ պլանավորել հոսքերի աշխատանքը։
 * 
 * @Data_Races տեղի է ունենում, երբ 2 տարբեր ինստրուկցիաներ(հրահանգներ) տարբեր հոսքերից(@threade ) դիմում են նույն հիշողության բլոկին(բջջին):
 * 
 * @heisenbug Սխալի @error @bug տեսակններ են, որոնք անհետանում են կամ փոխում են իր հատկությունները` երբ փորձումես գտնել դրանց։
 */