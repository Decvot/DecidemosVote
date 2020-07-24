const votation = require('../models/votations');



/*CRUD API of votation*/

//create a new 'votation' 
exports.createVotation = async (req, res) => {
    try {
      const newDoc = await votation.create(req.body);
                      
      res.status(201).json({
        status: 'success',
        data: {
          newDoc,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'error at canton create',
        message: err,
      });
    }
  };



  //get a  specific 'votation' using '_id' 
exports.getOneVotation = async (req, res) => {

    try {
      const doc = await votation.findById(req.params.id)
       console.log(req.params.id)
      if (!doc) throw 'no document found';
  
      res.status(200).json({
        status: 'success',
        data: {
          doc,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };




  //get all 'votations' 
  exports.getAllVotations = async (req, res) => {
    try {
      const docs = await votation.find({});
      if (!docs) throw 'no documents found';

        res.status(200).json({
            status: 'success',
            data: {
              docs,
            },
          });
        } catch (err) {
          res.status(404).json({
            status: 'fail',
            message: err,
          });
        }
      };



      //update a 'votation'
      exports.updateOneVotation = async (req, res) => {
        try {
          const updatedDoc = await votation.findByIdAndUpdate(req.params.id, req.body, {
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



    //delete a specific 'votation'
    exports.deleteOneVotation =  async (req, res) => {
        try {
          const doc = await votation.findByIdAndDelete(req.params.id);
        
      
          res.status(204).json({
            status: 'success',
            message: 'doc deleted !',
          });
        } catch (err) {
          res.status(404).json({
            status: 'fail',
            message: err,
          });
        }
      };
    