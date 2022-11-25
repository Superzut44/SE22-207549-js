const express = require('express');
const router = express.Router();


// Controller definition
// --

// router.get('URL PATH', CONTROLLER FUNCTION);

router.get('/contact', (request, response) => {
    // response.send('Hello Contact !!');

    response.render('contact');
});



// Export router
// --

module.exports = router;