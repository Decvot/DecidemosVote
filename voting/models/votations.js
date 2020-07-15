const mongoose = require('mongoose');

const votationsSchema=mongoose.Schema({
    nom:{
        type:String,
        required:true,
    },
    thematique:{
        type:mongoose.Schema.ObjectId,
        ref:'Thematique',
        required:true

    },
    listeCommune:{
        type:[{
            type:mongoose.Schema.ObjectId,
            ref:'Commune'
        }],
        required:true
    },
    listeCanton:{
        type:[{
            type:mongoose.Schema.ObjectId,
            ref:'Canton'
        }],
        required:true
    },
    listeCirconscription:{
        type:[{
            type:mongoose.Schema.ObjectId,
            ref:'Circonscription'
        }],
        required:true
    },
    listeBureau:{
        type:[{
            type:mongoose.Schema.ObjectId,
            ref:'Bureaux'
        }],
        required:true
    },
    dateOuverture:{
        type:Date,
        require:true
    },
    dateFermeture:{
        type:Date,
        require:true
    },
    prochaineDateExtractionDecisionaire :{
        type:Date,
        require:true
    },
    nbrJoursAvantExtraction:{
        type:integer,
        require:true
    },
    typePrimaire:{
        type:String,
        require:true
    },
    interneALorganisation:{
        type: boolean,
        require:true,
    },
    habite:{
        type:mongoose.Schema.ObjectId,
        ref:'Pays',
        require:true
    },
    nationallité:{
        type:[{
            type:mongoose.Schema.ObjectId,
            ref:'Pays'

        }],
        require:true
    }
    
})
const votations = mongoose.model('Votations',cantonSchema);
module.exports = votations