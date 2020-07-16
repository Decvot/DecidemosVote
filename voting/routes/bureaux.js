var express = require('express');
const bureauController = require('../controllers/bureauController')
var router = express.Router();

/* GET bureaux . */

router.route('/')
.get(bureauController.getAllBureaux)
.post(bureauController.createBureau)

router.route('/:id')
.get(bureauController.getOneBureau)
.patch(bureauController.updateOneBureau)
.delete(bureauController.deleteOneBurau)


module.exports = router;