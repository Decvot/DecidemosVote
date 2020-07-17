const region = require('../models/region');

exports.createRegion = async (req, res) => {
    try {
      const newDoc = await region.create(req.body);
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
exports.findAllRegions=async(req,res)=>{

    try{
        const doc= await region.find({});
        if (!doc) throw 'the regions are empty';


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



}
exports.findRegion= async (req, res) => {
  var  doc; 

  try {
      
        doc = await region.find({codeRegion:req.params.id});
  
     if (doc.length==0) {
       doc = await region.findById(req.params.id);
    }
      if (doc.length==0)throw 'no document found';

      
  
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
  


  exports.deleteRegion=async (req,res)=>{
      try{
          
          const doc = await region.findByIdAndDelete(req.params.id);
          if (!doc) throw 'cannot delete';
  
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

      }
  
      exports.updateOneRegion = async (req, res) => {
        try {
          const updatedDoc = await bureau.findOneAndUpdate({ $or: [ { codeBureau: req.params.code }, { id: req.params.id } ] }, req.body, {
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