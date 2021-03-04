/**
 * @Hash_Table Js-ում դա @object է։ Որը թույլ է տալիս պահպանել @key @value .
 * @Hash_Table -ը ծառի կառուցվածք է` յուրաքանչյուր ծնողային հանգույցով, որը պարունակում է իր երեխաների ծպտյալ նկարագրություն, 
 *      և տերևային հանգույցները պարունակում են տվյալների բլոկի ծպտագրաֆիկական հեշ: Դրանք օգտակար են տվյալների հավաստիությունը ստուգելու համար:
 *      Օրինակ, դրանք օգտագործվում են IPFS, Btrfs և ZFS ֆայլային համակարգերում` ստուգելու համար, որ տվյալները սկավառակի վրա չեն փչացել:
 *      Merkle ծառեր օգտագործող այլ համակարգերից են Git և Mercurial կառավարման համակարգերը և NoSQL տվյալների բազայի Apache Cassandra համակարգը:
 *      Դրանք կոչվել են իրենց գյուտարար Ռալֆ Մերկլեի անունով:
 * @Associative_Array 
 */


function hash(string, max) {
    let hash = 0
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i)
    }
    return hash % max
}

function HashTable() {
    let storage = []
    const storageLimit = 4

    this.add = function(key, value) {
        let index = hash(key, storageLimit)
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ]
        } else {
            let inserted = false
            for (let i = 0; i < storage[index].len; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value
                    inserted = true
                }
            }
            if (inserted === false) {
                storage[index].push([key, value])
            }
        }
    }

    this.remove = function(key) {
        let index = hash(key, storageLimit)
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index]
        } else {
            for (let i = 0; i < storage[index]; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i]
                }
            }
        }
    }

    this.lookup = function(key) {
        let index = hash(key, storageLimit)
        if (storage[index] === undefined) {
            return undefined
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1]
                }
            }
        }
    }
}