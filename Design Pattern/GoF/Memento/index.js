/**
 * @Memento
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%8A%D5%A1%D5%B0%D5%BA%D5%A1%D5%B6%D5%B8%D5%B2_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class Memento {
	constructor(value) {
		this.value = value;
	}
};

const creator = {
	save: val => new Memento(val),
	restore: memento => memento.value,
};

class Caretaker {
	constructor() {
		this.values = [];
	}

	addMemento(memento) {
		this.values.push(memento);
	}

	getMemento(index) {
		return this.values[index];
	}
};