const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bureaux=require("./bureaux");

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
            ref:'Bureaux'
        }],
        required:true
    }
})
 var Departement=mongoose.model('Departement',communesSchema);
module.exports=Departement;