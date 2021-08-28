const router = require('express').Router()
const passport = require('../config/passport')
const { signUp, login, loggedUser, logout } = require('../controllers/auth-controller')

router.post('/signup', signUp)
router.post('/login', passport.authenticate('local'), login)
router.get('/logged', loggedUser)
router.get('/logout', logout)

module.exports = router