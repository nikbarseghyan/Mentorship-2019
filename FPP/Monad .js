/**
 * @Monad Դա @Functor -ի տեսակ է, քանի որ ունի @map մեթոդը և հավելյալ @ap @of @chain (որոնք նույնպես ռեալիզացնում են @map մեթոդը)։
 * @Monad_Maybe
 * @Monad_Either
 */


class Monad {
    constructor(val) {
        this.__value = val;
    }
    static of(val) {
        return new Monad(val);
    };

    map(f) { 
        return Monad.of(f(this.__value));
    };

    join() { 
        return this.__value;
    };

    chain(f) { 
        return this.map(f).join();
    };

    ap(someOtherMonad) {
        return someOtherMonad.map(this.__value);
    }
}