const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());                       
app.use(express.urlencoded({ extended: true })); 

mongoose.connect('mongodb+srv://user_id:e2UKo0XJAlozIZ1C@cluster0.o9ppe1m.mongodb.net/', {}); 

const db = mongoose.connection;
db.on('error', (err) => console.error('MongoDB connection error:', err));
db.once('open', () => console.log('MongoDB connected'));

const wordRoutes = require('./routes/wordRoutes');
wordRoutes(app);

app.get('/', (req, res) => {
  res.json({ message: 'API is alive.' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
