const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bureaux=require("./bureaux");

const circonscriptionsSchema=new Schema({
    codeCirconscriptions:{

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
 var circonscriptions=mongoose.model('Circonscription',circonscriptionsSchema);
module.exports=circonscriptions;