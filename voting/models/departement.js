const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departementSchema=new Schema({
    codeDepartement:{

        type:String,
        required:true,
        unique:true
    },
    codRegion:{
        type:String,
        required:true,
    },
    libelle:{
        type:String,
        required:true

    },
    

},
{ toJSON: { virtuals: true } }
)

/* 
departementSchema.virtual('bureaux',{
    ref:'Canton',
   foreignField: 'codeDepartement',
    localField: 'codeDepartement',
}) 
 */
 var Departement=mongoose.model('Departement',departementSchema);
module.exports=Departement;