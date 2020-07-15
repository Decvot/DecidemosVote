const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type:[{
            type:mongoose.Schema.ObjectId,
            ref:'Bureau'
        }],
        required:true
    }
})
 var pays=mongoose.model('Pays',paysSchema);
module.exports=pays;