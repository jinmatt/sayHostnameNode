const express = require('express');
const os = require('os');

let app = express();

app.get('/', (req, res) => {
  res.send(`Say my name: ${os.hostname()}`);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
