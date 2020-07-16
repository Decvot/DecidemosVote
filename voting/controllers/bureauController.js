const bureau = require('../models/bureaux');

exports.createBureau = async (req, res) => {
    try {
      const newDoc = await bureau.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          newDoc,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };
exports.findBureau = async (req, res) => {
    try {
       const doc = await bureau.findById(req.params.id);
     
     
  
      if (!doc) throw 'no document found';
  
      res.status(200).json({
        status: 'success',
        data: {
          doc,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };