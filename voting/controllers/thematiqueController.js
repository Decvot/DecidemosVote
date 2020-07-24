const thematique = require('../models/thematiques');

exports.createthematique = async (req, res) => {
  try {
    const newDoc = await thematique.create(req.body);
                    
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

exports.getAllthematique=async(req,res)=>{

    try{
        const doc= await thematique.find({})
  
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
exports.getOneThematique= async (req, res) => {

  try {

      const docs = await thematique.find(req.params.id);
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
  
  exports.updateOneThematique = async (req, res) => {
    try {
     /*  const obj = Object.assign({},req.body);
      delete obj.bureaux
      console.log(obj)
 */
  
      const updatedDoc = await thematique.findByIdAndUpdate(req.params.id,obj, 
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

exports.deleteOnethematique =  async (req, res) => {
  try {
    const doc = await thematique.findByIdAndDelete(req.params.id);
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