/**
 * @Stack . Կանչ(Բուրգ), այն հետևում է` LIFO (Last In First Out «վերջին ներս, առաջին դուրս») սկզբունքին։
 * @Stack -ը տարրերի հաջորդական հավաքածու է, որտեղ կարող է փոփոխվել միայն վերջին տարրը:
 * @Method @push @pop @peek @size
 */

function Stack() {
    this.count = 0
    this.storage = {}

    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
    }

    this.pop = function() {
        if (this.count === 0) return undefined
        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.peek = function() {
        return this.storage[this.count - 1]
    }

    this.size = function() {
        return this.count
    }
}