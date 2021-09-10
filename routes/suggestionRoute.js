const router = require('express').Router()
const {createSuggestion, getSuggestion} = require('../controllers/suggestion-controller')


router.post('/create', createSuggestion)
router.get('/allsuggestions', getSuggestion)

module.exports = router