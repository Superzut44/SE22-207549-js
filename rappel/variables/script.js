"use strict";

// Mot clé Var
// -> Environnement global de JS
// --

var myVar_A;


// Mot clé Let
// -> Variable locale
// --

let myVar_B;

{
    let myVar_C;
    myVar_B;
}
// myVar_C; // Refference Error myVar_C n'est pas définit

// let i = 42;
// for (let a=0; a<3; a++ )
// {
//     console.log('In : ', i);
// }
// console.log('out :',i);
// console.log('out :',a);



// Mot clé Const
// -> Variable locale
// -> Valeur invariable
// --

let myVar_E = 42;
const myVar_F = 42;

// console.log(myVar_E, myVar_F);


myVar_E = 21;

// console.log(myVar_E, myVar_F);
