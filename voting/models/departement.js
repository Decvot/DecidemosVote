const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departementSchema=new Schema({
    codeDepartement:{

        type:String,
        required:true,
        unique:true
    },
    codeRegion:{

        string:Array
        },
    libelle:{
        type:String,
        required:true

    }
    // ,
    // bureaux:{
    //     type:String
    // }
},{
        // make calculated field show up in the output
        toJSON: { virtuals: true }}
      
     )

     departementSchema.virtual('codeContant',{
         ref:'Canton',
         foreignField: 'codeDepartement',
         localField: 'abc',
     }) 
     
 var Departement=mongoose.model('Departement',departementSchema);
module.exports=Departement;