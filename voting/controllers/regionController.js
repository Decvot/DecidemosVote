const region = require('../models/region');
const dep=require('../models/departement');
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
     /*  const doc=  await region.aggregate([
        { $lookup:
           {
             from: 'Departement',
             localField: 'codeReg',
             foreignField: 'codRegion',
             as: 'orderdetails'
           }
         }
        ]) */
      //   .toArray(function(err, res) {
      //    if (err) throw err;
      //    console.log(JSON.stringify(res));
        
      //  });
      //  region.find({});
        
        // const doc2 = departement.find({});
        // console.log(doc2);
      const doc = await region.find().populate('bureaux')

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