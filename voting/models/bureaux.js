const mongoose = require('mongoose');

const bureauxSchema = mongoose.Schema({
    nom:{
        type:String,
        required:[true,'nom est oblegatoire']
    },
    adresse:{
        type:String,
        required:true
    },
    commune:{
        type:mongoose.Schema.ObjectId,
        ref:'Commune'
    },
    canton:{
        type:mongoose.Schema.ObjectId,
        ref:'Canton'
    },
    circonscription:{
        type:mongoose.Schema.ObjectId,
        ref:'Circonscription'

    }
})

const Bureaux = mongoose.model('Bureaux',bureauxSchema);
module.exports = Bureaux ;
