const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// const connection = require('../../database/accountdb');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.post("/signin", (req, res) => {
    const { login, password } = req.body;
    console.log(login, password);
    res.send(login);
})

router.post("/signup", (req, res) => {
    const { login, password, email } = req.body;
    console.log(login, password, email);
    res.send(login);
})

// Verification de la connexion Ã  la base de donnÃ©es.
// connection.connect(function(err) {
//     if(err)
//       console.log('error:', err.stack);
//     else
//       console.log('connected as id:', connection.threadId);
// })

module.exports = router;