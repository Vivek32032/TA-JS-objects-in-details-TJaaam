
// function Animal(location,noOfLegs){

//     this.location = location;
//     this.numberOfLegs = noOfLegs;
// }

// Animal.prototype ={
//     eat(){
//         console.log(`I live in ${this.location} and I can eat`)
//     },
//     changeLocation(newLocation){
//         this.location = newLocation;
//     },
//     summary(){
//         return `I live in ${this.location} and I have ${this.numberOfLegs}`
//     }
// }



// function CreateDog(name,color){
    // Animal.call(this,"India",4);
//     this.name = name;
//     this.color = color;
// }
// CreateDog.prototype ={

//     bark(){
//         alert(`I am ${this.name} and I can bark 🐶`)
//     },
//     changeName(newName){
//         this.name = newName;
//     },
//     changeColor(newColor){
//         this.color = newColor;
//     },
//     summary(){
//         return  `I am ${this.name} and I am of ${this.color} color. I can also bark`
//     }

// }
// Object.setPrototypeOf(CreateDog.prototype,Animal.prototype)


// function CreateCat(name,colorOfEyes){
//    Animal.call(this,"India",4);
//     this.name = name;
//     this.colorOfEyes = colorOfEyes;
// }

// CreateCat.prototype ={

//     meow(){
//         alert(`I am ${this.name} and I can meow meow 😹`)
//     },
//     changeName(newName){
//         this.name = newName;
//     },
//     changeColorOfEyes(newColor){
//         this.colorOfEyes = newColor;
//     },
//     summary(){
//         return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
//     }

// }
// Object.setPrototypeOf(CreateCat.prototype,Animal.prototype);




//using class


class Animal{
    constructor(location,noOfLegs){
       this.location = location;
       this.numberOfLegs = noOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    }
    changeLocation(newLocation){
        this.location = newLocation;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }

}


class Dog extends Animal{
    constructor(name,color){
        super("india",4);
      this.name = name;
      this.color = color;
    }
   
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        this.name = newName;
    }
    changeColor(newColor){
        this.color = newColor;
    }
    summary(){
        return  `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
   

class Cat extends Animal{
    constructor(name,colorOfEyes){
     super("india",4);
     this.name = name;
     this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can meow meow 😹`)
    }
    changeName(newName){
        this.name = newName;
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
    }
    summary(){
        return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }

}
