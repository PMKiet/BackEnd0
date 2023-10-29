const getHomePage = (req, res) => {
     res.send('Hello World!')
}
const getAbout = (req, res) => {
     res.render('ex.ejs')
}

module.exports = {
     getHomePage,
     getAbout
}