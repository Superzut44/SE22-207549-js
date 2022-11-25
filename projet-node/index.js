
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

app.use( require('./controllers/homepage') );
app.use( require('./controllers/contact') );
app.use( require('./controllers/terms') );




// Server Start
// --

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
  
