/**
 * @Adapter
 * 
 * @Link https://hy.wikipedia.org/wiki/%D4%B1%D5%A4%D5%A1%D5%BA%D5%BF%D5%A5%D6%80_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class Engine2 {
	simpleInterface() { console.log('Engine 2.0 - tr-tr-tr') }
}

class EngineV8 {
	complecatedInterface() { console.log('Engine V8! - wroom wroom!') }
}

class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine;
	}

	simpleInterface() {
		this.engine.complecatedInterface();
	}
}

class Auto {
	startEngine(engine) {
		engine.simpleInterface()
	}
}