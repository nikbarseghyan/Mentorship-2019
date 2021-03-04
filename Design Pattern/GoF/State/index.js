/**
 * @State
 */

class Status {
    constructor(name, status){
        this.name = name
        this.status = status
    }

    next() {
        return new this.status()
    }
}

class ForPayment extends Status {
	constructor() {
		super('waitingForPayment', Shipping);
	}
}

class Shipping extends Status {
	constructor() {
		super('shipping', Delivered);
	}
}

class Delivered extends Status {
	constructor() {
		super('delivered', Delivered);
	}
}

class Order {
	constructor() {
		this.state = new ForPayment();
	}

	nextState() {
		this.state = this.state.next();
	};
}