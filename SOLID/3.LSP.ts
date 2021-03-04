/**
 * @LSP  The Liskov Substitution Principle
 * 
 * Անհրաժեշտ է որ @Child_Class ծառայեն որպես փոխնորդ @Super_Class -ի համար։
 * Բայց լավագույն դեպքում անհրաժեշտ է օգտագործել ընդհանուր @interface -եր ոչ թե ժառանգել @class -ը։
 */

class Rect {
    constructor(public w: number, public h: number) {}

    setWidth(w: number){
        this.w = w;
    }

    setHeight(h: number){
        this.h = h;
    }

    area(): number{
        return this.w * this.h;
    }
}

//Ժառանգենք
class Square extends Rect {
    w: number = 0;
    h: number = 0;
    constructor(size: number){
        super(size, size);
    }

    setWidth(w: number) {
        this.w = w;
        this.h = w
    }

    setHeight(h: number) {
        this.h = h;
        this.w = h;
    }
}

const sqr = new Square(10)

/**
 * @LSP ։Կանխատեսելի դարձնել @module վարքագիծը։ 
 */

interface Figure {
    setHeight(h: number): void {};
    setWidth(w: number): void {};
    area(): number {};
}

class Rect1 implements Figure {
    setHeight(h: number) {};
    setWidth(w: number) {};
    area():  {};
}
class Square1 implements Figure {
    setHeight(h: number) {};
    setWidth(w: number) {};
    area():  {};
}