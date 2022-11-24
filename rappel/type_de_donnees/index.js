// Chaines de caractères (string)
// --

"Chaine 1";
'Chaine 2';
`Chaine 3`;

var a = "Chaine 1";
// var a = new String('Chaine 1');

var b = 'Chaine 2';
var b2 = "";

var c = a + "\n" + b;
var d = a.concat("\n").concat(b);
var e = `Aujourd'hui on voit les "Chaines" : ${a}\n${b} !!! `;

// console.log( typeof e );

// Valeur logique de "abc" : Vrai
// Valeur logique de "" : Faux


// Type nombre (numbre)
// --

var f = 42;
var g = 4.5;
var h = 12345.0987654;

// console.log( typeof f );
// console.log( typeof g );
// console.log( typeof h );

// Valeur logique de 42 : Vrai
// Valeur logique de -42 : Vrai
// Valeur logique de 0 : Faux




// Type boolean (bool)
// --

var i = true; // vrai - 1
var j = false; // faux - 0

// Valeur logique de true : Vrai
// Valeur logique de false : Faux



// Type undefined
// --

var k; //console.log( k );
// k = 42; //console.log( k );
// k = undefined; //console.log( k );
// k = 30; //console.log( k );

// Valeur logique de undefined : Faux



// Type Null
// --

var l = null;
// console.log( l );
// console.log( null == undefined );

// Valeur logique de Null : Faux

// console.log( typeof k );
// console.log( typeof l );


// Type Tableau (Array)
// Collection de données
// --

var m1 = new Array(10);
var m2 = [10];

// Compte le nombre d'entrée du tableau
// console.log( m1.length );
// console.log( m2.length );

m2.push('Pommes');
// console.log( m2[0] );

// var m3 = ["Pommes", "Poires", "Bananes"];
// for (let i=0; i<m3.length; i++)
// {
//     console.log( m3[i] );
// }



// Type Objet (Object)
// Collection de données
// --

var n1 = new Object();
var n2 = {};

// console.log( typeof n1 );
// console.log( typeof n2 );

var a_user = [
    "Bruce",
    "Wayne"
];
var o_user = {
    firstname: "Bruce",
    lastname: "Wayne"
};

// Affiche le prenom
// console.log( a_user[0] );
// console.log( o_user.firstname );



// Type fonction
// --

function myFnc() {
    return 42;
}

// console.log( typeof myFnc ); // function
// console.log( typeof myFnc() ); // Number

let user = {
    firstname: "Obi wan",
    lastname: "Kenoby",
    sayHello: function(){
        return "Hello There";
    }
};

console.log( user.firstname );
console.log( user.sayHello() );