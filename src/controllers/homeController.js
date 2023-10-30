
const connection = require('../config/dataBase')

const getHomePage = (req, res) => {
     return res.render('homePage.ejs')
}
const getAbout = (req, res) => {
     res.render('ex.ejs')
}

const postCreateUser = (req, res) => {
     console.log('>>>Check req.body: ', req.body);
     res.send('create a new user')
}

module.exports = {
     getHomePage,
     getAbout,
     postCreateUser
}