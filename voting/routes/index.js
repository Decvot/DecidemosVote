var express = require('express');
var router = express.Router();
router.get('/', async function(req, res, next) {
 

  res.json({
    status:'good'
})});

router.post('/',async (req,res,next)=>{

  res.json({
      status:'good'
  })
})
module.exports = router;