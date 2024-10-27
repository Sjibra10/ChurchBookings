const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite Database
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run('CREATE TABLE bookings (id INTEGER PRIMARY KEY, name TEXT, date TEXT, time TEXT)');
});

// Routes
app.post('/bookings', (req, res) => {
  const { name, date, time } = req.body;
  db.run('INSERT INTO bookings (name, date, time) VALUES (?, ?, ?)', [name, date, time], (err) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send('Booking created');
  });
});

app.get('/bookings', (req, res) => {
  db.all('SELECT * FROM bookings', [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
