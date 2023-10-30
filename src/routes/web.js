const express = require('express')
const { getHomePage, getAbout, postCreateUser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage
)

router.get('/about', getAbout)

router.post('/create-user', postCreateUser)

module.exports = router