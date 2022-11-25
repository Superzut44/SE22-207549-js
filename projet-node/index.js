
// Import de la class Express
const express = require('express');

// Instance de Express
const app = express();

// Definition du Port du serveur
const port = 3000;






// App settings
// --





// App routings
// --

// app.get('/', (request, response) => {
//     response.send('Hello There !!');
// });

app.use( require('./controllers/homepage') );




// Server Start
// --

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
  
