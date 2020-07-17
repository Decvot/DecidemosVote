const communes = require('../models/communes');


exports.findAllCommunes=async(req,res)=>{

    try{
        const doc= await communes.find({});
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
exports.findCommunes= async (req, res) => {
  var  doc; 

  try {
      
        doc = await communes.find({codeCommune:req.params.id});
  
     if (doc.length==0) {
       doc = await communes.findById(req.params.id);
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
  

