const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('./database');

// const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');


router.get("/", (req, res) => {
  // serve the index.html file
  res.sendFile(__dirname + '/index.html')
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.post("/signin", (req, res) => {
    const { login, password } = req.body;
    connection.query(`SELECT login, password, id_user, mail, status FROM user WHERE login = "${login}" AND password = "${password}"`, (err, result) => {
      if(!err){
        if(result[0] != null) {
          res.json(JSON.parse(JSON.stringify(result[0])));}
        }
      else 
        console.log("error", err);
    })  
    //res.json(login);
})

router.post("/signup", (req, res) => {
    const { login, password, mail } = req.body;
    console.log(login, password, mail);
    console.log("called");
    connection.query(`INSERT INTO user (login, password, mail, status) VALUES ("${login}","${password}","${mail}", "1")`, (err, resultInsert) => {
      if(!err){
        connection.query(`SELECT login, password, id_user, mail, status FROM user WHERE login = "${login}" AND password = "${password}"`, (error, result) => {
          if(!error) {
            res.json(JSON.parse(JSON.stringify(result[0])));
          }
          else console.log("err", error);
        })}
      else 
        console.log("error", err);
    })  
    // res.json(result);
})

router.post("/createTrace", (req, res) => {
  const { id_user, login, message} = req.body;
  const date = new Date();
  const format = date.toLocaleDateString("fr-FR");
  connection.query('INSERT INTO `historic_chat`(`id_user`, `message`, `date`) VALUES ('+`${id_user}, "${message}", "${format}")`, (error, result) => {
    if(!error) {
      console.log("ça marche")
    } else {
      console.log("ça marche pas")
    }
  })
})

module.exports = router;