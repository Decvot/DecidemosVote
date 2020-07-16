const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communesSchema=new Schema({
    codeCommune:{

        type:String,
        required:true,
        unique:true
    },
    libelle:{
        type:String,
        required:true

    },
    postalCode:{
        type:String,
        required:true
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    }
   },
   {
    //make calculated field show up in the output
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  })
/* communesSchema.virtual('bureaux',{
    ref:'Bureau',
    foreignField: 'commune',
    localField: 'codeCommune',
}) */
 var communes=mongoose.model('Commune',communesSchema);
module.exports=communes;