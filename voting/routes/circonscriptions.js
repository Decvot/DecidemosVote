var express = require('express');
const circonscriptionController = require('../controllers/circonscriptionController');

var router = express.Router();

/* GET bureaux . */

router.route('/')
.get(circonscriptionController.getAllcirconsci)
.post(circonscriptionController.createcirconsci)
router.route('/:codeCirconscri')
.get(circonscriptionController.getOnecirconscis)
.patch(circonscriptionController.updateOnecirconsci)
.delete(circonscriptionController.deleteOnecirconsci)


module.exports = router;