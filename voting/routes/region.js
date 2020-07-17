var express = require('express');
const regionController= require('../controllers/regionController');
var router = express.Router();

router.post('/', regionController.createRegion);

router.get('/', regionController.findAllRegions);

router.route('/:id').get(regionController.findRegion).delete(regionController.deleteRegion);
module.exports = router;