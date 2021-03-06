const region = require('../models/region');

/*CRUD API of 'Departement'*/

//create a new 'region' 


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
  //get a  specific 'region' using 'code region' 

  exports.findRegion= async (req, res) => {
  
    try {
        
        const doc = await region.findOne({codeReg:req.params.codeRegion});
          if (!doc) throw 'no document found';
          console.log(req.params.codeRegion)

        
    
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


    
    //get all 'region' 

exports.findAllRegions=async(req,res)=>{

    try{
        const doc = await region.find({});

        if (!doc) throw 'no documents found';


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



}


//update a 'region'

exports.updateOneRegion = async (req, res) => {
    try {
       

     const updatedDoc = await region.findOneAndUpdate({codeReg:req.params.codeRegion}, req.body, {
        new: true,
        //to run the validator again
        runValidators: true,
      });
      console.log(updatedDoc)
      if (!updatedDoc) throw 'document not found';
      res.status(201).json({
        status: 'success',
        data: {
          updatedDoc,
        },
      });
      // const updatedDoc = await bureau.findOneAndUpdate({ $or: [ { codeBureau: req.params.code }, { id: req.params.id } ] }, req.body, {

    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
}



//delete a specific 'departement'

  exports.deleteRegion=async (req,res)=>{
      try{
          
          const doc = await region.findOneAndDelete({codeReg:req.params.codeRegion});
          if (!doc) throw 'cannot delete';
  
          res.status(201).json({
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

      }
  