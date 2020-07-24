const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema=new Schema({
            //the code of 'region'

    codeReg:{

        type:String,
        required:true,
        unique:true
    },


            //the code of 'pays' that include that specific 'departement'

    codePays:{

        type:String,
        unique:false
            },
          
        //the name of the 'region'

    libelle:{
        type:String,
        required:true

    },
    
        //the list of 'bureaux' that are included in the 'region'

    bureaux:{
        type:[]
    }
    });
      //this code is used for adding bureaux in region, once the 'bureaux'added correctly this code will be deleted  

//     { toJSON: { virtuals: true } }
    
    
    
//     );
// // },
// // { toJSON: { virtuals: true } }
// // )

//  regionSchema.virtual('bureaux',{
//      ref:'Departement',
//     foreignField: 'codRegion',
//      localField: 'codeReg',
// }) 
    

 var region=mongoose.model('Region',regionSchema);
module.exports=region;