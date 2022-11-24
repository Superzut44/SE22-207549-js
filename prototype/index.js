"use strict";

function User(fname, lname)
{
    this.firstname = fname;
    this.lastname = lname;
}

User.prototype.fullname = function()
{
    return `${this.firstname} ${this.lastname}`;
}

const user_1 = new User("John", "Doe");

console.log( `${user_1.firstname} ${user_1.lastname}` );
console.log( user_1.fullname() );


// ----------------

let myString = "Ceci est une chaine de caractères !";

String.prototype.countAll = function( letter )
{
    let count = 0;

    for (let i=0; i < this.length; i++ )
    {
        if (this.charAt(i).toUpperCase() == letter.toUpperCase() )
        {
            count++;
        }
    }

    return count;
}

console.log( myString.countAll('e') );