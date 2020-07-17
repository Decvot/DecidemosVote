const mongoose = require('mongoose');

const cantonSchema=mongoose.Schema({
    codeCanton:{
        type:String,
        required:true,
        unique:true
    }, codeDepartement:{
        type:String,
        required:true,
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
const Canton = mongoose.model('Canton',cantonSchema);
module.exports = Canton