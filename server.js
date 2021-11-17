const express = require('express');
const sqlite3 = require('sqlite3');

// Start server
const app = express();
app.listen(4000, () => console.log('Server running on port 4000.'));

// Connect and open database
let db = new sqlite3.Database('./db/testDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to database.');
});

// Close database connection
db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
