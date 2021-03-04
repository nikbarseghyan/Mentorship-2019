
/**
 * @Bridge
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%BF%D5%A1%D5%B4%D5%B8%D6%82%D6%80%D5%BB_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class Model {
	constructor(color) {
		this.color = color;
	}
};

class Color {
	constructor(type) {
		this.type = type;
	}
	get() {
		return this.type;
	}
};

class BlackColor extends Color {
	constructor() {
		super("dark-black");
	}
}

class SilbrigColor extends Color {
	constructor() {
		super("Silbermetallic");
	}
}

class Audi extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Auto: Audi, Color: ${this.color.get()}`;
	}
};

class Bmw extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Auto: Bmw, Color: ${this.color.get()}`;
	}
};