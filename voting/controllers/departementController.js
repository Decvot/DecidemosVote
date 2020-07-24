const departement = require('../models/departement');

/*CRUD API of 'Departement'*/

//create a new 'canton' 

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
        status: 'error at "departement" create',
        message: err,
      });
    }
  };

    //get a  specific 'Departement' using 'code Departement' 

exports.getOneDepartement = async (req, res) => {

    try {

      const doc = await departement.findOne({codeDepartement:req.params.codeDepartement})
       
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


    //get all 'Departements' 

  exports.getAllDepartement = async (req, res) => {
    try {

      
       
       const docs = await departement.find({})
       if (!docs) throw 'no documents found';

       //this code is used for adding bureaux in 'departement', as soon as 'bureaux'added correctly this code will be deleted  

       /* const doc = await departement.find({},'-bureaux').populate('testBureaux','bureaux').limit(10); */

      /* const data = await departement.aggregate([
        {
          
          $group:{
          _id:'$codeDepartement',
          bureaux:{ $push: '$bureaux' },
          
         
        }
       },
        { $sort : { _id : 1 } },
      
      ]) */



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

        //update a 'departement'

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
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
}


    //delete a specific 'departement'

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
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };

 
