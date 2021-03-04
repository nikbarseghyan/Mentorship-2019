/**
 * @Queue . Հեռթ։ Շատ նման է @Stack Կանչին մեկ տարբերությամբ որ այն հետևում է` FIFO (First In First Out«առաջինը, առաջինը դուրս») սկզբունքին։
 * @Queue հաջորդական հավաքածու է, որտեղ տարրերը ավելացվում են հերթի վերջում և հանվում սկզբից: Այն առավել արդյունավետորեն իրականացվում է կրկնակի 
 *      կապակցված ցուցակով: @Queue կարող է իրականացվել նաև որպես առանձին կապակցված ցուցակ կամ դինամիկ զանգված, 
 *      եթե պահպանվեն երկու լրացուցիչ ցուցիչներ ՝ մատնանշելով առաջին և վերջին տարրերը:
 * @Method @enqueue @dequeue @front @isEmpty @size
 */

function Queue() {
    let collection = []

    this.print = function() {
        console.log(collection)
    }

    this.enqueue = function(element) {
        collection.push(element)
    }

    this.dequeue = function() {
        return collection.shift()
    }

    this.front = function() {
        return collection[0]
    }

    this.isEmpty = function() {
        return collection.length === 0
    }

    this.size = function() {
        return collection.length
    }
}