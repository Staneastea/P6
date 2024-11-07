const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

const utilisateurAuth = mongoose.Schema({
    ID : {type: String, default: uuidv4, unique: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
})

module.exports = mongoose.model('utilisateur', utilisateurAuth);