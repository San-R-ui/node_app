const express = require('express');

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tejasthu</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: system-ui, sans-serif;
        background: #f7f7f7;
      }
      h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        margin: 0;
      }
    </style>
  </head>
  <body>
    <h1>Tejasthu</h1>
  </body>
</html>`;

  res.status(200).type('text/html; charset=utf-8').send(html);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
