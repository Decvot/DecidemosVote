var express = require('express');
const communeController = require('../controllers/communeController')
var router = express.Router();

/* GET bureaux . */

router.route('/')
.get(communeController.findAllCommunes);
router.route('/:id')
.get(communeController.findCommunes)


module.exports = router;