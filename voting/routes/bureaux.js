var express = require('express');
const bureux = require('../models/bureaux')
var router = express.Router();
const fs = require('fs');
/* GET bureaux . */

router.get('/', async function(req, res, next) {
    
});

router.post('/',async (req,res,next)=>{
    await bureux.create(req.body)

    res.json({
        status:'good'
    })
})
module.exports = router;