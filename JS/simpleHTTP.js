/**
 * 1. Pass a video into the media file.
 * 2. Use puppeteer to screen shot the video. 
 */

// import http from 'http';
let http = require('http')

const PORT = 8080;

let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <video src="${VIDEO}"></video>
</body>
</html>`;

http.createServer(
  (req,res)=>{
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': html.length,
      'Expires': new Date().toUTCString()
    })
    res.end(html);
  }
).listen(PORT);