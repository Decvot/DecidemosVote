const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type:[{
            type:mongoose.Schema.ObjectId,
            ref:'Bureau'
        }],
        required:true
    }
})
 var communes=mongoose.model('Commune',communesSchema);
module.exports=communes;