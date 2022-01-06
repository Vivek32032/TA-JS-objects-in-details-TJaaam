## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output:  Hello John/ error no error
console.log(user2.sayHello()); // output:Hello Arya / error
console.log(user.sayHello.call(user2)); // output:Hello Arya / error  since we are binding user2 object to user
console.log(user.sayHello.call(user2, 'Hey')); // output Hey Arya/ error 
console.log(user.sayHello.apply(user2, ['Hey'])); // outputHey Arya  / error
console.log(typeof user.sayHello.bind(user2)); // output function / error
console.log(user.sayHello.bind(user2)()); // output Hello Arya / error
console.log(userSayHello()); // output Hello undefined  / error since userSayHello has nothing in its left side so for function this is equal to window which is predefined object.
console.log(typeof userSayHello.bind(user2)); // output: function / error
console.log(userSayHello.bind(user2)()); // output: Hello Arya / errorisayHello is not any function.
console.log(userSayHello.apply(user3)); // output: Hello Bran / error
console.log(userSayHello.call(user3)); // output:Hello Bran / error
console.log(typeof new MainUser()); // output: Object / error
console.log(typeof new MainUser()); // output: Object / error
console.log(new MainUser().sayHello()); // output: Hello Tyrion / error
console.log(new MainUser().sayHello.call(user2)); // output: Hello Arya / error
console.log(new MainUser().sayHello.call(user)); // output:Hello John / error
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output: Welcome! John / error
```
