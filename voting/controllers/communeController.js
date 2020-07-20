const communes = require('../models/communes');


exports.findAllCommunes=async(req,res)=>{

    try{
        const doc= await communes.find({}).limit(10);
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

  try {
    var  docs; 


    docs = await communes.find({codeCommune:req.params.id});

     
      if (docs.length==0)throw 'no document found';

      
  
      res.status(200).json({
        status: 'success',
        data: {
          docs,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };
  

