/**
 * @Composite
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%BF%D5%A1%D5%A6%D5%B4%D5%B8%D5%B2_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class Equipment {
	getPrice() {
		return this.price || 0;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setPrice(price) {
		this.price = price;
	}
}

class Engine extends Equipment {
	constructor() {
		super();
		this.setName('Engine');
		this.setPrice(800);
	}
}

class Body extends Equipment {
	constructor() {
		super();
		this.setName('Body');
		this.setPrice(3000);
	}
}

class Tools extends Equipment {
	constructor() {
		super();
		this.setName('Tools');
		this.setPrice(4000);
	}
}

class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}

	add(equipment) {
		this.equipments.push(equipment);
	}

	getPrice() {
		return this.equipments
			.map(equipment => equipment.getPrice())
			.reduce((a, b) => a + b);
	}
}

class Car extends Composite {
	constructor() {
		super();
		this.setName('Audi');
	}
}