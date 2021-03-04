//Create ES-5 Class 
const Animal = function(props) {
    this.name = props.name,
    this.color = props.color,

    this.voice = functino() {
        console.log('Myu Myu Myu')
    }
},

//Example Class
const cat = new Animal({name: 'Barbara', color: 'Yellow'});

console.log(cat);
console.log(cat.name);
// cat.voice();

//Prototype
// Animal.prototype.voice = function() {
//     console.log('Myu Myu Myu', this.name)
// }

//Տեսանելի չէ, this.voic-ը։ 
console.log(Animal.prototype);


const Rabbit = function(props) {
    Animal.apply(this, arguments)
    this.eyesColor = props.eyesColor;
    this.isHungry = true;
}

//Ժառանգում ենք։
Rabbit.prototype = Object.create(Animal.prototype);
Rebbit.prototype.constructor = Rebbit;

const rebbit = new Rebbit({name: 'Silvester', color: 'Grey', eyesColor: 'Red'});

console.log(Rabbit.voice)