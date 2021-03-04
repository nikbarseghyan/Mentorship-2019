/**
 * @Chain_of_Responsibility Պարտականությունների շղթա (նախագծման ձևանմուշ)
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%8A%D5%A1%D6%80%D5%BF%D5%A1%D5%AF%D5%A1%D5%B6%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80%D5%AB_%D5%B7%D5%B2%D5%A9%D5%A1_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class Account {
	pay(orderPrice) {
		if (this.canPay(orderPrice)) {
			console.log(`Paid ${orderPrice} using ${this.name}`);
		} else if (this.incomer) {
			console.log(`Cannot pay using ${this.name}`);
			this.incomer.pay(orderPrice)
		} else {
			console.log('Unfortunately, not enough money');
		}
	}

	canPay(amount) {
		return this.balance >= amount;
	}

	setNext(account) {
		this.incomer = account;
	}
};

class Master extends Account {
	constructor(balance) {
		super();
		this.name = 'Master Card';
		this.balance = balance;
	}
};

class Paypal extends Account {
	constructor(balance) {
		super();
		this.name = 'Paypal';
		this.balance = balance;
    }
};

class Qiwi extends Account {
	constructor(balance) {
		super();
		this.name = 'Qiwi';
		this.balance = balance;
	}
};