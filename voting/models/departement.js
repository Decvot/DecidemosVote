const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departementSchema=new Schema({
    codeDepartement:{

        type:String,
        required:true,
        unique:true
    },
    codeRegion:{
        type:String,
        required:true,
    },
    libelle:{
        type:String,
        required:true

    },
    bureaux:[]

})
 var Departement=mongoose.model('Departement',departementSchema);
module.exports=Departement;