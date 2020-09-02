const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('./database');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.post("/signin", (req, res) => {
    const { login, password } = req.body;
    console.log(login, password);
    res.json(login);
})

router.post("/signup", (req, res) => {
    const { login, password, email } = req.body;
    console.log(login, password, email);
    res.json(login);
})

module.exports = router;