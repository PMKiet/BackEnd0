const express = require('express')
const { getHomePage, getAbout } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage
)

router.get('/about', getAbout)

module.exports = router