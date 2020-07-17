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

    }
},
{ toJSON: { virtuals: true } }
)


const Canton = mongoose.model('Canton',cantonSchema);
module.exports = Canton