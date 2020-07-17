const mongoose = require('mongoose');
const Bureaux = require('./bureaux');

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
    // bureaux:{
    //     type:[Bureaux]
    // }
},
{ toJSON: { virtuals: true } }
)


const Canton = mongoose.model('Canton',cantonSchema);
module.exports = Canton