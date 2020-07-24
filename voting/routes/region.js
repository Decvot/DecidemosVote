var express = require('express');
const regionController= require('../controllers/regionController');
var router = express.Router();



router.get('/', regionController.findAllRegions)
      .post('/', regionController.createRegion);

router.route('/:codeRegion')
      .get(regionController.findRegion)
      .patch(regionController.updateOneRegion)
      .delete(regionController.deleteRegion);
module.exports = router;