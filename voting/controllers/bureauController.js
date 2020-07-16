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
exports.getOneBureau = async (req, res) => {
    try {
       const doc = await bureau.findOne({codeBureau:req.params.code});
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

  exports.getAllBureaux = async (req, res) => {
    try {
      const doc = await bureau.find({});
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

  exports.updateOneBureau = async (req, res) => {
    try {
      const updatedDoc = await bureau.findOneAndUpdate({codeBureau:req.params.code}, req.body, {
        new: true,
        //to run the validator again
        runValidators: true,
      });
      if (!updatedDoc) throw 'document not found';
      res.status(201).json({
        status: 'success',
        data: {
          updatedDoc,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
}

exports.deleteOneBurau =  async (req, res) => {
    try {
      const doc = await bureau.findOneAndDelete({codeBureau:req.params.code});
      if (!doc) {
        throw 'no document found with this id';
      }
  
      res.status(204).json({
        status: 'success',
        message: 'doc deleted !',
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };