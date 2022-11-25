const express = require('express');
const router = express.Router();

// Import de Axios
const axios = require('axios');
const url = "https://swapi.dev/api/people";


// Controller definition
// --

// router.get('URL PATH', CONTROLLER FUNCTION);

router.get('/', async (request, response) => {
    // response.send('Hello Homepage !!');


    // requete axios
    const query = await axios.get(url);
    const characters = query.data.results;

    const fruits = ['Pommes', 'Poires', 'Bananes'];

    response.render('homepage', {
        page: "home",
        fruits: fruits,
        characters: characters,
    });

});



// Export router
// --

module.exports = router;