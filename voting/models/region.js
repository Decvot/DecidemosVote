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
    bureaux:{
        type:[]
    }
    });
// },
// { toJSON: { virtuals: true } }
// )

// regionSchema.virtual('bureau',{
//     ref:'Departement',
//     foreignField: 'codeRegion',
//     localField: 'codeRegion',
// }) 
    

 var region=mongoose.model('Region',regionSchema);
module.exports=region;