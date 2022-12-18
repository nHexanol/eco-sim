const http = require('http');
const server = http.createServer(owo).listen(8080);

function owo(req, res) {
  if (req.method === "GET") {
    var url = req.url.split('/');
    // https://api.wynncraft.com/v2/player/nHexanol/stats
    var username = url[5];
    fetch(`https://api.wynncraft.com/v2/player/${username}/stats`)
    .then(r => r.json())
    .then(function (body) {
      body = body.data[0].meta.playtime * 4.7 / 60;
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(body));
    })
  }
}