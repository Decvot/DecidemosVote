const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bureaux=require("./bureaux");

const paysSchema=new Schema({
    codePays:{

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
 var pays=mongoose.model('Pays',paysSchema);
module.exports=pays;