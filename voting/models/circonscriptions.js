const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const circonscriptionsSchema=new Schema({
    codeCirconscriptions:{

        type:String,
        required:true,
        unique:true
    },
    libelle:{
        type:String,
        

    },
    bureaux:{
        type:[],
        
    }
})
 var circonscriptions=mongoose.model('Circonscription',circonscriptionsSchema);
module.exports=circonscriptions;