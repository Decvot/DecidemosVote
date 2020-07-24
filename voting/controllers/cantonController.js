const canton = require('../models/cantons');



/*CRUD API of canton*/

//create a new 'canton' 
exports.createCanton = async (req, res) => {
    try {
      const newDoc = await canton.create(req.body);
                      
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



  //get a  specific 'canton' using 'codeCanton' 
exports.getOneCanton = async (req, res) => {

    try {
      const doc = await canton.findOne({codeCanton:req.params.codeCanton})
       
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




  //get all 'canton' 
  exports.getAllCanton = async (req, res) => {
    try {
      const docs = await canton.find({});
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



      //update a 'canton'
      exports.updateOneCanton = async (req, res) => {
        try {
          const updatedDoc = await canton.findOneAndUpdate({codeCanton:req.params.codeCanton}, req.body, {
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



    //delete a specific 'canton'
    exports.deleteOneCanton =  async (req, res) => {
        try {
          const doc = await canton.findOneAndDelete({codeCanton:req.params.codeCanton});
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
    
      //this code is used for adding bureaux in canton, as soon as 'bureaux'added correctly this code will be deleted  
      //const dep = require('../models/departement');
      //exports.cantonDep = async (req,res)=>{
      //   try {
      //     const data = await canton.aggregate([
      //       {
      //         $group:{
      //         _id:'$codeDepartement',
      //         bureaux:{ $push: '$bureaux' },
              
             
      //       }
      //      },
      //       { $sort : { _id : 1 } },
          
      //     ])
          
      //     data.forEach(async depe => {
      //       let bureaux = []
      //       if(depe._id < "10"){
      //         depe._id =depe._id.replace('0','')
      //        /*  depe._id = "0"+depe._id */
      //       }
            
      //       try {
      //         depe.bureaux.forEach(async elt => {
                
      //           if(elt.length){
      //             bureaux = bureaux.concat(elt)
      //           }
               
      //           //await dep.findOneAndUpdate({codeDepartement:depe._id},doc)
      //         })  
      //         if(+depe._id === 13){
    
      //          console.log('here');
      //         }
      //         await dep.findOneAndUpdate({codeDepartement:+depe._id},{bureaux:bureaux})
    
      //         //AUBE
              
      //         //console.log('bon') 
              
      //       } catch (error) {
              
      //      }
            
           
      //     })
         
      //      res.status(201).json({
      //        status: 'success',
      //        data: {
      //          data
      //        },
      //      });
      //    } catch (err) {
      //      res.status(400).json({
      //        status: 'fail',
      //        message: err,
      //      });
      //    }
      //  }; 
    