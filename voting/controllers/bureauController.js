const bureau = require('../models/bureaux');
const communes = require('../models/communes');
const fs = require('fs')

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

      const doc = await bureau.findOne({codeBureau:req.params.code,commune:req.params.commune})
       
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

  exports.getAllBureaux = async function(req,res)  {
    try {


      
      const doc = await bureau.find();
      res.status(200).json({
        status: 'success',
        data: {
         data
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

exports.deleteOneBurau =  async (req, res) => {
    try {
      const doc = await bureau.findOneAndDelete({ $or: [ { codeBureau: req.params.code }, { id: req.params.id } ] });
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

  exports.bureauxCanton = async (req,res)=>{
    try {
     let canCom = JSON.parse(fs.readFileSync('./codeCommuneCodeContant.json','utf-8'))
      
      
      const doc = await bureau.find({canton:"",commune:{$ne:""}})
      /* communes.foreach((elt)=>{
        /* const obj = canCom.filter((eltt)=> eltt.codeCommune == "1025")
       console.log(obj) 
       
      })  */
      const doc1= await communes.findOneAndUpdate({codeCommune:"1001"})
   /*  communes.forEach(commune => {
       canCom.forEach( elt => {
         //if(+elt.codeCommune == +commune.commune){
          com.find().then(d => {
            data = d
          })
         //}//
       })
        
    })
     */
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