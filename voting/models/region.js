const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema=new Schema({
    codeRegion:{

        type:String,
        required:true,
        unique:true
    },
    codePays:{

        type:String,
        required:true,
        
    },
    libelleRegion:{
        type:String,
        required:true

    }
    
    
}, {

   toJSON: { virtuals: true }
}
)
regionSchema.virtual('bureaux',{
    ref:'Departement',
    foreignField: 'codeRegion',
    localField: 'codeRegion',
})
 var region=mongoose.model('Region',regionSchema);
module.exports=region;