/**
 * @Iterator
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%BB%D5%BF%D5%A5%D6%80%D5%A1%D5%BF%D5%B8%D6%80_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class ArrayIterator {
	constructor(el) {
		this.index = 0;
		this.elements = el;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNext() {
		return this.index < this.elements.length;
	}
};

class ObjectIterator {
	constructor(el) {
		this.index = 0;
		this.keys = Object.keys(el),
		this.elements = el;
	}

	next() {
		return this.elements[this.keys[this.index++]];
	}

	hasNext() {
		return this.index < this.keys.length;
	}
};