"use strict";

const url = "https://pokeapi.co/api/v2/pokemons?limit=100000&offset=0";
const target = document.getElementById('pokemons');

async function httpGet(url)
{
    try {
        const response = await fetch(url);
        const data = await response.json();
    
        return data.results;
    }
    catch(error)
    {
        alert("Oops erreur d'api");
        return [];
    }
}

(async function(){
    const response = await httpGet(url);
    console.log( response );
    const pokemons = response;
    
    pokemons.forEach(pokemon => {

        const a = document.createElement('A');
              a.innerText = pokemon.name
              a.href = pokemon.url

        target.append(a);
    });

    console.log("Fin de la fonction");
})();


console.log("Fin du code");