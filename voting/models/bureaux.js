const mongoose = require('mongoose');

const bureauSchema = mongoose.Schema({
    nom:{
        type:String,
        required:[true,'nom est oblegatoire']
    },
    
})