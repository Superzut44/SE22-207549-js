// Import du module PATH de node
const path = require('path');

// Import du parser EJS (Embedded JavaScript Template)
const ejs = require('ejs');


// Import de la class Express
const express = require('express');

// Instance de Express
const app = express();

// Definition du Port du serveur
const port = 3000;
// const guessPort = require('./utils/port');
// const port = guessPort();



// App settings
// --

// Define the "views" directory
app.set('views', path.join(__dirname, "views"));


// Define the HTML engine
app.set('view engine', "html");
app.engine('html', ejs.__express);


// Add the access to the "public" directory
app.use( express.static( path.join( __dirname, "public") ) );


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
  
