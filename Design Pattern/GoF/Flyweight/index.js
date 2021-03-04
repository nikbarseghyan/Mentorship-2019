/**
 * @Flyweight
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%80%D5%A1%D6%80%D5%B4%D5%A1%D6%80%D5%A5%D6%81%D5%B6%D5%B8%D5%B2_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class Auto {
	constructor(model) {
		this.model = model;
	}
}

class AutoFactory {
	constructor(name) {
		this.models = {};
	}

	create(name) {
		let model = this.models[name];
		if (model) return model;
		this.models[name] = new Auto(name);
		return this.models[name];
	}
}