var express = require('express');
const communeController = require('../controllers/communeController');

var router = express.Router();

/* GET bureaux . */

router.route('/')
.get(communeController.getAllCommunes)
.post(communeController.createCommune)
router.route('/:codeCommune')
.get(communeController.getOneCommunes)
.patch(communeController.updateOneCommune)
.delete(communeController.deleteOneCommune)


module.exports = router;