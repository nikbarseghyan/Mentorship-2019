/**
 * @Tree Դա բազմամակարդականի կառուցվածք է։ Ոչ գծային կառուցվածք է ի տարբերություն @Array ,@Stack ,@Queue 
 *      Տվյալ կառուցվածքը շատ էֆեկտիվ է ավելացնել և որոնել էլեմենտները։
 * @Tree ծառը բարդ կառուցվածք է, որի տարրերը դասավորված են ծնող-երեխա հիերարխիայում՝ ծառի ճյուղերի նման: 
 *      Տարրերը նշվում են որպես հանգույցներ: Ծառը պարունակում է մեկ հատ արմատային@root հանգույց@node ,որը ծնողներ չունի:
 *      Անցումը սովորաբար տեղի է ունենում միայն մեկ ուղղությամբ՝ հանգույցից մինչև իր երեխաներից մեկը(«հետնորդներ»): 
 *      Հետո անցումը շարունակվում է ռեկուրսիվ կերպով՝ դեպի այդ հանգույցի երեխաներից մեկը, մինչև հասնի ցանկալի հանգույցը: 
 *      Եթե ​​հանգույցը երեխաներ չունի, այն կոչվում է՝ տերևի հանգույց.
 *      @Հավասարակշռված ծառ։ նրա բոլոր ճյուղերը նույն «խորությունն» ուննեն. բոլոր տերևային հանգույցները նույն հեռավորությունն ուննեն արմատային հանգույցից: 
 *      @Անհավասարակշռված ծառ։ հակառակը։
 * 
 * @Method @root @parent node @child node @siblings @leaf @Edge @Path @Height of Tree @Depth of Node @Degree of Node
 * @BinarySearchTree
 * @Method @add @findMin @findMax @find @isPresent @remove
 */


class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
        this.root = null
    }

    add(data) {
        const node = this.root
        if (node === null) {
            this.root = new Node(data)
            return
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data)
                        return
                    } else if (node.left !== null) {
                        return searchTree(node.left)
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data)
                        return
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                } else {
                    return null
                }
            }
            return searchTree(node)
        }
    }

    findMin() {
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }

    findMax() {
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }

    find(data) {
        let current = this.root
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
            if (current === null) {
                return null
            }
        }
        return current
    }

    isPresent(data) {
        let current = this.root
        while (current) {
            if (data === current.data) {
                return true
            }
            data < current.data ? current = current.left : current = current.right
        }
        return false
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (node === null) return null
            if (data === node.data) {
                if (node.left === null && node.right === null) return null
                if (node.left === null) return node.right
                if (node.right === null) return node.left
                let tempNode = node.right
                while (tempNode.left !== null) {
                    tempNode = tempNode.left
                }
                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)
                return node
            } else if (data < node.data) {
                node.left = removeNode(node.right, data)
                return node
            } else {
                node.right = removeNode(node.right, data)
                return node
            }
        }
        this.root = removeNode(this.root, data)
    }
}