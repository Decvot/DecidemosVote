const mongoose = require('mongoose');

const votationsSchema=mongoose.Schema({
    // the name of the 'votation'
    nom:{
        type:String
    },
    // the country of the 'votation'
    pays:{
        type:String

    },
    // the 'thematique ' of the 'votation'
    thematique:{
        type:String

    },
    // all the 'communes' list
    listeCommune:{
        type:[]
        
    },
    // the 'listeCanton' list
    listeCanton:{
        type:[]
    },

    //the 'listeCirconscription' list
    listeCirconscription:{
        type:[]
        },
    //the 'bureau' list
    listeBureau:{
        type:[]
    },
    //the opening date of the 'votation'
    dateOuverture:{
        type:Date
    },
    //the finishing date of the 'votation'
    dateFermeture:{
        type:Date
    },

    //the next date of 'votation'
    prochaineDateExtractionDecisionaire :{
        type:Date
    },

    //the date numbers
    nbrJoursAvantExtraction:{
        type:Number
    },

    //the pramiry 
    typePrimaire:{
        type:String
    },

    
    interneALorganisation:{
        type: Boolean
    },
    habite:{
        type:String
    },
    nationallité:{
        type:[]
    }
    
})
const votations = mongoose.model('Votations',votationsSchema);
module.exports = votations