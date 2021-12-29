let animalMethods ={
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation){
        this.location = newLocation;
    },
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

function animal(location,noOfLegs){
    let animalInfo = Object.create(animalMethods);
    animalInfo.location = location;
    animalInfo.numberOfLegs = noOfLegs;
    return animalInfo;
}

let dogMethods ={

    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName){
        this.name = newName;
    },
    changeColor(newColor){
        this.color = newColor;
    },
    summary(){
        return  `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}

function createDog(name,color){
    let  dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}
Object.setPrototypeOf(dogMethods,animalMethods)

let catMethods ={

    meow(){
        alert(`I am ${this.name} and I can meow meow 😹`)
    },
    changeName(newName){
        this.name = newName;
    },
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
    },
    summary(){
        return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }

}

function createCat(name,colorOfEyes){
    let  cat = Object.create(catMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}
Object.setPrototypeOf(catMethods,animalMethods);