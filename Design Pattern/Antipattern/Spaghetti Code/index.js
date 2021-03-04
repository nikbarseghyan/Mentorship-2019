/**
 * @Spaghetti_Code
 * Գրել մի կոդ, որը վատ կազմակերպված է, շփոթեցնող և դժվար հասկանալի, որը պարունակում է բազմաթիվ տեսակի անցումներ, 
 *      ինչպիսիք են ` բացառությունները, պայմանները, ցիկլեր։
 */

window.onload = function() {
    var a = new A();
    a.init();
};

A = function() {
    this.b = {};
};
A.prototype = {
    init : function() {
        document.writeln("init");
        this.b = new B();
        this.b.doCallback(this.init2);
    },

    init2 : function() {
        document.writeln("init2");
        this.b.say();
    }
};

B = function(){};
B.prototype = {
    doCallback: function(callback){
        callback();
    },

    say: function(){
        document.writeln("I'm B");
    }
};