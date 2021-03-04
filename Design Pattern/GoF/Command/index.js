/**
 * @Command 
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%80%D6%80%D5%A1%D5%B4%D5%A1%D5%B6_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class Driver {
	constructor(command) {
		this.command = command;
	}

	execute() {
		this.command.execute();
	}
};

class Engine {
	constructor() {
		this.state = false;
	}

	on() {
		this.state = true;
	}

	off() {
		this.state = false;
	}
};

class OnStartCommand {
	constructor(engine) {
		this.engine = engine;
	}

	execute() {
		this.engine.on();
	}
};

class onSwitchOffCommand {
	constructor(engine) {
		this.engine = engine;
	}

	execute() {
		this.engine.off();
	}
};