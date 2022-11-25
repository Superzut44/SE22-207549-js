const express = require('express');
const router = express.Router();


// Controller definition
// --

// router.get('URL PATH', CONTROLLER FUNCTION);

router.get('/terms', (request, response) => {
    response.send('Hello Terms of use !!');
});



// Export router
// --

module.exports = router;