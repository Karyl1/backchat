const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'nanochat',
  port: 3308,
});

// Verification de la connexion Ã  la base de donnÃ©es.
connection.connect(function(err) {
  if(err)
    console.log('error:', err.stack);
  else
    console.log('connected as id:', connection.threadId);
})

// connection.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });
function GetUsers(){
  connection.query("SELECT * FROM user", (res, err) => {
    if(!err)
      return res;
    else 
      return err;
  })  
}
function GetOneUsers(login, password){
  connection.query("SELECT login, password, id_user, mail FROM user WHERE login =" + login + "AND password =" + password, (res, err) => {
    if(!err)
      return res;
    else 
      return err;
  })  
}
function AddOneUsers(login, password,mail){
  connection.query("INSERT INTO user FROM (login, password, mail)  VALUES (" + login + "," + password + "," + mail + ")", (res, err) => {
    if(!err)
      connection.query("SELECT login, password, id_user, mail FROM user WHERE login =" + login + "AND password =" + password, (result, error) => {
        return result;
      })
    else 
      return err;
  })  
}

function AddHistoricMessage(id_user,messages){
  const date = new Date().now();
  connection.query("INSERT INTO `historic_chat`(`id_user`, `message`, `date`) VALUES (" + id_user + "," + messages + "," + date + ")", (res, err) => {
    if(!err)
        return res;
    else 
      return err;
  })  
}
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

module.exports = connection;