const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database(':memory:'); // Change to a file path for persistent storage

app.use(cors());
app.use(bodyParser.json());

// Initialize the database
db.serialize(() => {
  db.run('CREATE TABLE bookings (id INTEGER PRIMARY KEY, name TEXT, date TEXT, time TEXT, reason TEXT)');
});

// Endpoint to get all bookings
app.get('/bookings', (req, res) => {
  db.all('SELECT * FROM bookings', [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

// Endpoint to create a booking
app.post('/bookings', (req, res) => {
  const { name, date, time, reason } = req.body; // Destructure reason
  db.run('INSERT INTO bookings (name, date, time, reason) VALUES (?, ?, ?, ?)', [name, date, time, reason], function(err) {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(201).send({ id: this.lastID }); // Send back the new booking's ID
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});