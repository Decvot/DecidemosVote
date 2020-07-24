var express = require('express');
const votationController= require('../controllers/votationController');
var router = express.Router();



router.get('/',votationController.getAllVotations)
      .post('/', votationController.createVotation);

router.get('/:id',votationController.getOneVotation)
      .patch('/:id',votationController.updateOneVotation)
      .delete('/:id',votationController.deleteOneVotation);


module.exports = router;