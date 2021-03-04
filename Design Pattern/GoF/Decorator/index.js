/** 
 * @Decorator
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%B4%D5%A5%D5%AF%D5%B8%D6%80%D5%A1%D5%BF%D5%B8%D6%80_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
*/
class Car {

	constructor() {
		this.price = 10000;
		this.model = 'Car'
	}
  
	getPrice() {
		return this.price;
	}
  
	getDescription() {
		return this.model
	}
}

class Tesla extends Car {

	constructor() {
		super();
		this.price = 25000;
		this.model = 'Tesla';
	}
}

class Autopilot {
	constructor(car) {
		this.car = car;
  	}

	getPrice() {
		return this.car.getPrice() + 5000;
	}
  
	getDescription() {
		return `${this.car.getDescription()} with autopilot`;
	}
}

class Parktronic {
	constructor(car) {
		this.car = car;
	}

	getPrice() {
		return this.car.getPrice() + 3000;
	}
  
	getDescription() {
		return `${this.car.getDescription()} with parktronic`;
	}
}