function myCat(name)
{
    console.log(`${name} is crazy !!!`);
}

myCat('Hades');


class User {
    firstname;

    constructor(name)
    {
        this.firstname = name;
    }

    sayHello(user)
    {
        console.log(`Hello ${user}`);
    }
}

let bob = new User("bob");
let john = new User("john");

bob.sayHello(john);
john.sayHello(bob);