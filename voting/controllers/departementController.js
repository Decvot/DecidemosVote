const departement = require('../models/departement');


exports.findAllDepartement=async(req,res)=>{

    try{
        const doc= await departement.find({}).populate({
            path:'codeContant',
            select:'bureaux'
        });
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



// }
// exports.findCommunes= async (req, res) => {

//   try {
//     var  docs; 


//     docs = await communes.find({codeCommune:req.params.id});

     
//       if (docs.length==0)throw 'no document found';

      
  
//       res.status(200).json({
//         status: 'success',
//         data: {
//           docs,
//         },
//       });
//     } catch (err) {
//       res.status(400).json({
//         status: 'fail',
//         message: err,
//       });
//     }
//   };
  

