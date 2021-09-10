const Suggestion = require ("../models/Suggestion")

exports.createSuggestion = (req,res) =>{
Suggestion.create({...req.body})
.then(suggestions => {res.status(200).json({suggestions})})
.catch(err => {res.status(400).json({err})})
}

exports.getSuggestion = (req, res) =>{
    Suggestion.find()
    .then(suggestions => res.status(200).json({suggestions}))
    .catch(err => res.status(400).json({error}))
}
