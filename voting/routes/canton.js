var express = require('express');
const cantonController = require('../controllers/cantonController')
var router = express.Router();

/* GET bureaux . */
 router.route('/depcant').get(cantonController.cantonDep)
router.route('/')
.get(cantonController.getAllCanton)
.post(cantonController.createCanton)

router.route('/:code')
.get(cantonController.getOneCanton)
.patch(cantonController.updateOneCanton)
.delete(cantonController.deleteOneCanton)


module.exports = router;