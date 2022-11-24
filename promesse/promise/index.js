"use strict";

// const maPromesse = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('toto');
//     }, 10000);
//   });
  
// maPromesse
//     .then(gestionnaireSuccesA, gestionnaireEchecA);

// function gestionnaireSuccesA(data)
// {
//     console.log("Succès A", data);
// }
// function gestionnaireEchecA()
// {
//     console.log("Echec A");
// }

const maPromesse = new Promise(function(resolve, reject) {

    setTimeout(function(){
        console.log("le setTimeout");
        
        if (  Math.random() < .5 )
        {
            resolve('toto');
        }
        else{
            reject()
        }

    }, 5000);

});

// On déclenche la promesse
maPromesse

// Le reponse de la promesse déclenche la methode "then()"
.then(gestionnaireSuccesA, gestionnaireEchecA);


// Executer lorsque la promesse est un succes
function gestionnaireSuccesA(data)
{
    console.log("Succès A", data);
}

// Executer lorsque la promesse est un Echec
function gestionnaireEchecA()
{
    console.log("Echec A");
}