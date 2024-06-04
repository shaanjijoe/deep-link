const express = require('express');
const fs = require('fs');

const app = express();

// Endpoint for serving AASA file for iOS
app.get('/.well-known/apple-app-site-association', (req, res) => {
  const aasaFilePath = 'apple-app-site-association';
  fs.readFile(aasaFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading AASA file');
      return;
    }
    res.set('Content-Type', 'application/json');
    res.status(200).send(data);
  });
});

// Endpoint for serving Digital Asset Links JSON file for Android
app.get('/.well-known/assetlinks.json', (req, res) => {
  const assetLinksFilePath = 'assetlinks.json';
  fs.readFile(assetLinksFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading Asset Links file');
      return;
    }
    res.set('Content-Type', 'application/json');
    res.status(200).send(data);
  });
});

app.get('/ping', (req, res) => {
    res.status(200).send("WOrking");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
