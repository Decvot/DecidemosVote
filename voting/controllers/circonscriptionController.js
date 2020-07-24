const circonsci = require('../models/circonscriptions');

exports.createcirconsci = async (req, res) => {
  try {
    const newDoc = await circonsci.create(req.body);
                    
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

exports.getAllcirconsci=async(req,res)=>{

    try{
        const doc= await circonsci.find({})
  
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
exports.getOnecirconscis= async (req, res) => {

  try {

      const docs = await circonsci.findOne({codeCirconscriptions:req.params.codeCirconscri});
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
  
  exports.updateOnecirconsci = async (req, res) => {
    try {
      const obj = Object.assign({},req.body);
      delete obj.bureaux
      console.log(obj)

  
      const updatedDoc = await circonsci.findOneAndUpdate({codeCirconscriptions:req.params.codeCirconscri},obj, 
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

exports.deleteOnecirconsci =  async (req, res) => {
  try {
    const doc = await circonsci.findOneAndDelete({codeCirconscriptions:req.params.codeCirconscri});
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