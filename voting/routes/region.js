var express = require('express');
const region = require('../models/region')
const regionController= require('../controllers/regionController');
const { route } = require('./bureaux');
var router = express.Router();
/* GET bureaux . */

router.post('/', regionController.createRegion);

router.get('/', regionController.findAllRegions);

router.route('/:id').get(regionController.findRegion).delete(regionController.deleteRegion);
module.exports = router;