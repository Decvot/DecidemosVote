const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema=new Schema({
    codeRegion:{

        type:String,
        required:true,
        unique:true
    },
    libelle:{
        type:String,
        required:true

    },
    
})
 var region=mongoose.model('Region',regionSchema);
module.exports=region;