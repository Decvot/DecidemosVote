const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bureaux=require("./bureaux");

const communesSchema=new Schema({
    codeCommune:{

        type:String,
        required:true,
        unique:true
    },
    libelle:{
        type:String,
        required:true

    },
    bureaux:{
        type:[bureaux],
        required:true
    }
})
 var communes=mongoose.model('communes',communesSchema);
module.exports=communes;