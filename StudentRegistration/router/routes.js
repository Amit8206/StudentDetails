const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();


router.get('/', function(req, res) {
    res.render('reg');
});


router.post('/handle_form', controller.register);



module.exports = router;



