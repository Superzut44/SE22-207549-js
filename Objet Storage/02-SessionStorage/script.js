// Memory limit : 10Mb


console.log( Storage );
console.log( window.sessionStorage ); // Stockage valide uniquement pour la durée de session de navigation
console.log( window.localStorage );
console.log( '' );

const session_storage = window.sessionStorage;
const local_storage = window.localStorage;

// nombre d'éléments contenus dans l'objet Storage.
console.log( 'Length (local) : ', local_storage.length );
console.log( 'Length (session) : ', session_storage.length );
console.log( '' );

// Ajouter ou Modifier un element
local_storage.setItem( 'firstname', "Bruce" );
session_storage.setItem( 'firstname', "Bruce" );

// Récuperation d'un element 
const session_firstname = session_storage.getItem( 'firstname' );
const local_firstname = local_storage.getItem( 'firstname' );

console.log( 'Firstname (session) : ', session_firstname );
console.log( 'Firstname (local) : ', local_firstname );
console.log( '' );

// Récupération de la valeur associée à une clé
const session_key = session_storage.key(0);
const local_key = local_storage.key(0);

console.log( 'Key 0 (session) : ', session_key );
console.log( 'Key 0 (local) : ', local_key );
console.log( '' );

// Remove specific item
session_storage.removeItem( 'firstname' );
local_storage.removeItem( 'firstname' );
console.log( '' );

// // Remove all items
// session_storage.clear();
// local_storage.clear();


console.log( 'Space (session) : ', sessionStorageSpace() );
console.log( 'Space (local) : ', localStorageSpace() );
console.log( '' );

function localStorageSpace()
{
    const storage = window.localStorage;
    let total = 0;

    for (let key in storage)
    {
        if (!storage.hasOwnProperty(key)) continue;
        total += ((storage[key].length + key.length) * 2);
    }

    return (total / 1024).toFixed(2);
}
function sessionStorageSpace()
{
    const storage = window.sessionStorage;
    let total = 0;

    for (let key in storage)
    {
        if (!storage.hasOwnProperty(key)) continue;
        total += ((storage[key].length + key.length) * 2);
    }

    return (total / 1024).toFixed(2);
}
