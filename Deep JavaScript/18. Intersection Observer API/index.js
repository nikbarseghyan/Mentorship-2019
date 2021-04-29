/**
 * @Intersection_Observer_API վեբ հավելվածներին թույլ է տալիս ասինքխրոն կերպով դիտել տարրի կամ իր ծնողի կամ @document շրջանակի փոփոխությունները։
 *      Թուլ է տալիս գրանցել callback-function, որը կկատարվի, երբ դիտարկվող տարրը @target_event հատում է մեկ այլ տարրի սահմանները 
 *      կամ երբ տարրի որևէ արժեք փոխվում է մեկ այլ արժեքով:
 * @IntersectionObserver
 * @IntersectionObserver.IntersectionObserver()
 * @IntersectionObserver.root
 * @IntersectionObserver.rootMargin
 * @IntersectionObserver.thresholds
 * @Methods 
 * @IntersectionObserver.disconnect()
 * @IntersectionObserver.observe()
 * @IntersectionObserver.takeRecords()
 * @IntersectionObserver.unobserve()
 * 
 * @root Էլեմենտ, որն օգտագործվում է որպես դիտարկվող տարր։ 
 * @rootMargin Սահմաններ root շուրջ։
 * @threshold Թիվ կամ թվերի զանգված, որը ցույց է տալիս, @target_event -ին թիրախային տարրի տեսանելիության քանի տոկոսով պետք է գործարկվի 
 *            callback-function-ը։
 */ 


const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

let callback = function(entries, observer) {
    /* Content excerpted, show below */
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('#listItem');
observer.observe(target);