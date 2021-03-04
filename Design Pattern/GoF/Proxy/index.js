/**
 * @Proxy Պրոքսի (նախագծման ձևանմուշ)
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%8A%D6%80%D5%B8%D6%84%D5%BD%D5%AB_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */

class CarAccess {
	open() {
		console.log('Opening car door')
	}

	close() {
		console.log('Closing the car door')
	}
};

class SecuritySystem {
	constructor(door) {
		this.door = door;
	}

	open(password) {
		if (this.authenticate(password)) {
			this.door.open();
		} else {
			console.log('Access denied!');
		}
	}

	authenticate(password) {
		return password === 'Ilon';
	}

	close() {
		this.door.close()
	}
};