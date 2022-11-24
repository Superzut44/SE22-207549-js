"use strict";

// for (let i=0; i<3; i++)
// {
//     console.log( i );
// }

const btn = document.getElementById('btn');
var i = 0;

btn.addEventListener('click', event => {
    i++;
    console.log(i);
    console.log('Yep');
}) ;
