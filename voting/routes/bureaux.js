var express = require('express');
const bureauController = require('../controllers/bureauController')
var router = express.Router();

/* router.route('/bureauxCanton').get(bureauController.bureauxCanton) */
/* GET bureaux . */
router.route('/')
.get(bureauController.getAllBureaux)
.post(bureauController.createBureau)

router.route('/:code/:commune')
.get(bureauController.getOneBureau)
.patch(bureauController.updateOneBureau)
.delete(bureauController.deleteOneBurau)


module.exports = router;