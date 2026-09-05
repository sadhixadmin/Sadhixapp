//https://stackblitz.com/edit/node-p9e9phyf?file=index.js
// Modules
const mysql = require('mysql');

// Establishing a connection with the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sadhixdb'
});

// Connect to the database
connection.connect((err) => {

  if (err) {
    console.log('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');

  // Query to execute
  const query = 'SELECT * FROM user_info WHERE id = 0';

  connection.query(query, (err, results) => {
    if (err) {
      console.log('Error executing query:', err);
      return;
    }
    // console.log(typeof results);
    // console.log(results.length);

    if (results.length > 0) {
        console.log(results[0].name);
    } else {
        console.log('No record found.');
    }

    // Close the connection
    connection.end((err) => {
      if (err) {
        console.log('Error closing the connection:', err);
        return;
      }
      console.log('Connection closed.');
    });
  });

});
