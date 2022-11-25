const express = require('express');
const router = express.Router();


// Controller definition
// --

// router.get('URL PATH', CONTROLLER FUNCTION);

router.get('/', (request, response) => {
    // response.send('Hello Homepage !!');

    const fruits = ['Pommes', 'Poires', 'Bananes'];

    response.render('homepage', {
        page: "home",
        fruits: fruits
    });

});



// Export router
// --

module.exports = router;