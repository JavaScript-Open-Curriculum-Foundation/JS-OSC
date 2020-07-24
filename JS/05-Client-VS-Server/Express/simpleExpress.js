const path = require('path');
const express = require('express')
const app = express()
const port = 3000

const html = (header,body,footer) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    ${header}
  </head>
  <body>
  <h1>${body}</h1>
  ${footer}
  </body>
  </html>`;
}

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send(  
    html(
      `<link rel="stylesheet" href="/public/style.css">`,
      `<h1>HELLO</H1>`,
      `<script src="/public/alert.js"></script>`) 
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))