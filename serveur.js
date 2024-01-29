var http = require('http');
var port = 3001;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("serveur créer");
    if (req.url == "/accueil") {
        res.write("<p> Bienvenue à l'accueil! </p>")
        console.log("Vous êtes à l\'accueil")
        res.end();
    }
    if (req.url == "/Logo") {
        res.write('<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png" alt="logo epitech" width=750 height=500>');
        console.log("Vous êtes au logo")
        res.end();
    }
    if (req.url == "/profile") {
        res.write("<p> Bienvenue sur votre profile</p>")
        console.log("Vous êtes sur votre profile")
        res.end();
    }
  res.end();
}).listen(port);