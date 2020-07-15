const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departementSchema=new Schema({
    codeDepartement:{

        type:String,
        required:true,
        unique:true
    },
    libelle:{
        type:String,
        required:true

    },
    bureaux:{
        type:[{
            type:mongoose.Schema.ObjectId,
            ref:'Bureau'
        }],
        required:true
    }
})
 var Departement=mongoose.model('Departement',departementSchema);
module.exports=Departement;