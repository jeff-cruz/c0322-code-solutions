const express = require('express');
const app = express();

app.use((req, res) => {
  console.log(`req.method:, ${req.method}`);
  res.send('Hello World! hows it goin');
});

app.listen(3000, () => {
  console.log('The server is listening fosho');
});
