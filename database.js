const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'nanochat',
  port: 3308,
});
connection.connect((err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log('Connection established');
});

// connection.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });

connection.query("SELECT * FROM user", (res, err) => {
  if(!err)
    console.log(res);
  else 
    console.log(err);
})

// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

module.exports = connection;