const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departementSchema=new Schema({
        //the code of 'departement'

    codeDepartement:{

        type:String,
        required:true,
        unique:true
    },
        //the code of 'region' that include that specific 'departement'

    codRegion:{
        type:String,
        required:true,
    },
        //the name of the 'departement'

    libelle:{
        type:String,
        required:true

    },
    
    //the list of 'bureaux' that are included in the 'departement'

    bureaux:{
        type:[]
    }
    

});


/* departementSchema.virtual('testBureaux',{
    ref:'Canton',
   foreignField: 'codeDepartement',
    localField: 'codeDepartement',
})  */
 
 var Departement=mongoose.model('Departement',departementSchema);
module.exports=Departement;