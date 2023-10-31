
const connection = require('../config/dataBase')

const getHomePage = (req, res) => {
     return res.render('homePage.ejs')
}
const getAbout = (req, res) => {
     res.render('ex.ejs')
}

const postCreateUser = (req, res) => {
     console.log('>>>Check req.body: ', req.body);
     let email = req.body.email
     let name = req.body.name
     let city = req.body.city

     console.log('Email: ', email, 'Name: ', name, 'City: ', city);

     connection.query(
          `INSERT INTO Users(email, name, city)
           VALUES(?, ?, ?)`,
          [email, name, city],
          function (err, results) {
               console.log(results);
          }
     );

     res.send('create a new user success')
}

// INSERT INTO Users(email, name, city)
// VALUES('minhkiet3466@gmail.com', 'Kiet', 'Longz');

module.exports = {
     getHomePage,
     getAbout,
     postCreateUser
}