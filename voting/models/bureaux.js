const mongoose = require('mongoose');

const bureauxSchema = mongoose.Schema({
    
    codeBureau:{
        type:String,
        required:true
    },
    
    nom:{
        type:String,
        required:[true,'nom est oblegatoire']
    },

    adresse:{
        type:String,
        required:[true,'adresse est oblegatoire']
    },
    commune:{
        type:String,
        ref:'Commune'
    },
    canton:{
        type:String,
        ref:'Canton'
    },
    circonscription:{
        type:String,
        ref:'Circonscription'

    }
    ,
})

const Bureaux = mongoose.model('Bureau',bureauxSchema);
module.exports = Bureaux ;
