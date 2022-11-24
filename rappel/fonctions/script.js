// Une fonction est une procédure stockée nommée


// Fonctions Internes / Natives
// --

// console.log( window );
// alert('Plop');



// Fonctions utilisateurs
// --

function addition(a, b)
{
    console.log('a : ', a);
    console.log('b : ', b);
    let result = a + b;
    return result;
}

// console.log( addition(10, 5) );
// console.log( addition(12, 100) );



// Fonction Anonyme
// --

const multiply = function(a, b){
    return a * b;
};

// console.log( multiply(5, 2) );



// Fonction Immediate
// --

(function(){
    // console.log("Pas de temps à perdre !!");
})();

// (declaration de fonction anonyme)(arguments);

(function(w){
    // console.log(w);
})(window);


// Fonction fléché
// --

let i = 0;
const btn = document.getElementById('btn');
const el_fname = document.getElementsByName('firstname')[0];

function plop()
{
    alert('plop 3');
}

// var that = this;
btn.addEventListener('click', plop);
el_fname.addEventListener('blur', plop);

// btn.addEventListener('click', event => {
//     // console.log(event.target.id)
//     console.log( this );
// });
