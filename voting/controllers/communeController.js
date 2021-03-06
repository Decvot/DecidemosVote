const communes = require('../models/communes');

exports.createCommune = async (req, res) => {
  try {
    const newDoc = await communes.create(req.body);
                    
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

exports.getAllCommunes=async(req,res)=>{

    try{
        const doc= await communes.find({})
  
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
exports.getOneCommunes= async (req, res) => {

  try {

      const docs = await communes.find({codeCommune:req.params.codeCommune});
      if (!docs)throw 'no document found';
  
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
  
  exports.updateOneCommune = async (req, res) => {
    try {
      const obj = Object.assign({},req.body);
      delete obj.bureaux
      console.log(obj)

  
      const updatedDoc = await communes.findOneAndUpdate({codeCommune:req.params.codeCommune},obj, 
        {
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

exports.deleteOneCommune =  async (req, res) => {
  try {
    const doc = await communes.findOneAndDelete({codeCommune:req.params.codeCommune});
    if (!doc) {
      throw 'no document found with this codeCommune';
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