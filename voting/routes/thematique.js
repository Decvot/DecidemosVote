var express = require('express');
const thematiqueController = require('../controllers/thematiqueController')
var router = express.Router();

/* router.route('/bureauxCanton').get(bureauController.bureauxCanton) */
/* GET bureaux . */
router.route('/')
.get(thematiqueController.getAllthematique)
.post(thematiqueController.createthematique)

router.route('/:id')
.get(thematiqueController.getOneThematique)
.patch(thematiqueController.updateOneThematique)
.delete(thematiqueController.deleteOnethematique)


module.exports = router;