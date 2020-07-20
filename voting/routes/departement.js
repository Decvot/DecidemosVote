var express = require('express');
const departementController = require('../controllers/departementController')
var router = express.Router();

/* GET bureaux . */

router.route('/')
.get(departementController.getAllDepartement)
.post(departementController.createDepartement)

router.route('/:codeDepartement')
.get(departementController.getOneDepartement)
.patch(departementController.updateOneDepartement)
.delete(departementController.deleteOneDepartement)


module.exports = router;