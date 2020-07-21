const canton = require('../models/cantons');
const dep = require('../models/departement');


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
        status: 'fail',
        message: err,
      });
    }
  };
exports.getOneCanton = async (req, res) => {

    try {

      const doc = await canton.findOne({codeCanton:req.params.code})
       
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

  exports.getAllCanton = async (req, res) => {
    try {
      const doc = await canton.find({})
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

  exports.updateOneCanton = async (req, res) => {
    try {
      const updatedDoc = await canton.findOneAndUpdate({codeCanton:req.params.code}, req.body, {
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

exports.deleteOneCanton =  async (req, res) => {
    try {
      const doc = await canton.findOneAndDelete({codeCanton:req.params.code});
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

  exports.cantonDep = async (req,res)=>{
   try {
     const data = await canton.aggregate([
       {
         $group:{
         _id:'$codeDepartement',
         bureaux:{ $push: '$bureaux' },
          
         
       }
      },
       { $sort : { _id : 1 } },
      
      ]).limit(20)
    data.forEach(async (elt)=>{
     
      try {
        
         const doc = await dep.findOneAndUpdate({abc:elt._id},{ $push: { bureaux: elt.bureaux } }) 
        console.log(doc)
      } catch (error) {
        console.log(error)
      }
      
    
    
    })
      res.status(201).json({
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