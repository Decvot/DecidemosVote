const mongoose = require('mongoose');
const Bureaux = require('./bureaux');


const cantonSchema=mongoose.Schema({
    //the code of 'canton'
    codeCanton:{
        type:String,
        required:true,
        unique:true
    },
    
    //the code of 'departement' that include that specific 'canton'
    codeDepartement:{
        type:String,
        required:true,
    },
    //the name of the 'canton'
    libelle:{
        type:String,
        required:true

    },
    //the list of 'bureaux' that are included in the 'catnon'
    bureaux:{
        type:[]
    }
},

)


const Canton = mongoose.model('Canton',cantonSchema);
module.exports = Canton