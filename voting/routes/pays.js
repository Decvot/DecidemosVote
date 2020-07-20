var express = require('express');
const payscontroller = require('../controllers/paysController')
var router = express.Router();

/* GET bureaux . */

router.route('/')
.get(payscontroller.getAllPays)
.post(payscontroller.createPays)

router.route('/:codePays')
.get(payscontroller.getOnePays)
.patch(payscontroller.updateOnPpays)
.delete(payscontroller.deleteOnePays)


module.exports = router;