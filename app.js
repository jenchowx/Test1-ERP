const express = require('express');
const path = require('path');
const db = require('./db.js')

const app = express();
const port = 3000;

// Serve the index1.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index1.html'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
  });

  app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
  });

app.use(express.json());
app.post('/save-name', async(req, res) => {
  const {firstName} = req.body;
  //Save the firstName to the database
  try {
    await db.saveFirstName(firstName);
    res.status(200).send('Name saved successfully');
  } catch (err) {
    console.error('Error saving name: ', err);
    res.status(500).send('Error saving name');
  }
});

app.get('/names', async(req, res) => {
  const names = await db.getAllNames();
  res.json(names);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});