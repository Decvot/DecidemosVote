const departement = require('../models/departement');
const region = require('../models/region');


exports.createDepartement = async (req, res) => {
    try {
      const newDoc = await departement.create(req.body);
                      
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
exports.getOneDepartement = async (req, res) => {

    try {

      const doc = await departement.findOne({codeCanton:req.params.code})
       
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

  exports.getAllDepartement = async (req, res) => {
    try {

      
     /*  const doc = await departement.find({}).populate('bureaux') */
      const doc = await departement.find({})
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

  exports.updateOneDepartement = async (req, res) => {
    try {
      const updatedDoc = await departement.findOneAndUpdate({codeDepartement:req.params.codeDepartement}, req.body, {
        new: true,
        //to run the validator again
        runValidators: true,
      });
      if (!updatedDoc) throw 'document not found  ss';
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

exports.deleteOneDepartement =  async (req, res) => {
    try {
      const doc = await departement.findOneAndDelete({codeDepartement:req.params.codeDepartement});
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

 
