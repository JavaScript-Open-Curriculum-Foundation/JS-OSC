/**
 * 1. Pass a video into the media file.
 * - https://www.pexels.com/videos/
 * 2. Use puppeteer to screen shot the video. 
 * 3. https://stackoverflow.com/questions/28822034/simple-node-js-server-that-sends-htmlcss-as-response
 */

let http = require('http')
const fs = require('fs');
const PORT = 7000;

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

http.createServer(
  (req,res)=>{
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': html.length,
      'Expires': new Date().toUTCString()
    })
    res.end(
      html(
        `
          <link rel="stylesheet" href="/public/style.css">
          <style>
          </style>
        `,
        `<h1>HELLO</H1>`,
        `<script> alert('hi') </script>`
      ) 
    );
  }
).listen(PORT);


