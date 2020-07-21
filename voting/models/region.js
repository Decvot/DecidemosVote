const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema=new Schema({
    codeReg:{

        type:String,
        required:true,
        unique:true
    },
    codePays:{

        type:String,
        unique:false
            },
          

    libelle:{
        type:String,
        required:true

    },
    
    },
    { toJSON: { virtuals: true } });
// },
// { toJSON: { virtuals: true } }
// )

 regionSchema.virtual('bureaux',{
     ref:'Departement',
    foreignField: 'codRegion',
     localField: 'codeReg',
}) 
    

 var region=mongoose.model('Region',regionSchema);
module.exports=region;