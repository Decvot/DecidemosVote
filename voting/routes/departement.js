var express = require('express');
const departementController = require('../controllers/departementController')
var router = express.Router();

/* GET bureaux . */

router.route('/')
.get(departementController.findAllDepartement);


module.exports = router;