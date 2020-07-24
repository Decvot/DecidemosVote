var express = require('express');
const cantonController = require('../controllers/cantonController')
var router = express.Router();

/* GET bureaux . */
      //this route is used for adding bureaux in canton, as soon as 'bureaux'added correctly  this code will be deleted  
 //router.route('/depcant').get(cantonController.cantonDep)

router.route('/')
.get(cantonController.getAllCanton)
.post(cantonController.createCanton)

router.route('/:codeCanton')
.get(cantonController.getOneCanton)
.patch(cantonController.updateOneCanton)
.delete(cantonController.deleteOneCanton)


module.exports = router;