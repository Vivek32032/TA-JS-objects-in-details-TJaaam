//function to create object.



function createUser(name,id,noOfProjects){
    let user ={
    name :name,
    id : id,
    noOfProjects : noOfProjects,
    getProjects(){
        return noOfProjects;
    },
    changeName(newName){
        let oldName = this.name;
        this.name = newName;
        return oldName;
    }
}
    return user
}



let user1 = createUser("vivek",91,5);
let user2 = createUser("sayam",32,2);

//using object.create

function createUsers(name,id,noOfProjects){
    let user = Object.create(createUsers.prototype);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
}

createUsers.prototype = {
    getProjects(){
        return noOfProjects;
    },
    changeName(newName){
        let oldName = this.name;
        this.name = newName;
        return oldName;
    }
}

let user3 = createUsers("vivek",91,5);
let user4 = createUsers("sayam",32,2);

//using pseudoclassical way

function CreateUser(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
    getProjects(){
        return noOfProjects;
    },
    changeName(newName){
        let oldName = this.name;
        this.name = newName;
        return oldName;
    }
}

let user5 = new CreateUser("vivek",91,5);
let user6 = new CreateUser("sayam",32,2);

//using class

class User{
    constructor(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    }

    getProjects(){
        return noOfProjects;
    }
    changeName(newName){
        let oldName = this.name;
        this.name = newName;
        return oldName;
    }
}

let user7 = new User("vivek",91,5);
let user8 = new User("sayam",32,2);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);
console.log(user7);
console.log(user8);