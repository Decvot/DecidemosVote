const mongoose = require('mongoose');

const thematiquesSchema=mongoose.Schema({
    nom:{
        type:String,
        required:true,
    },
    territoire:{
        type:String,
        required:true

    },
    delaiDecisionnaire:{
       type:integer,
        required:true
    }

})
const thematiques = mongoose.model('Thematique',thematiquesSchema);
module.exports = thematiques