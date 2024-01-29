var express = require('express');
var app = express();

const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/';
const client = new MongoClient(url);

async function run_db() {
    try {
        await client.connect();
/*         const database = client.db("workshop");
        const workshop = database.collection("workshop");
        const result = workshop.find(query);
        for await (const doc of result) {
            console.dir(doc);
        } */
        console.log("Connected to db!");
    } finally {
        await client.close();
    }
}
run_db().catch(console.dir);

app.get('/', function(req,res) {
    console.log("Coucou Noah!");
    res.end();
})

app.get('/Logo', function(req, res) {
    res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png" alt="logo epitech" width=750 height=500>');
    console.log("Vous êtes au logo")
    res.end();
});

app.get("/profile", function(req,res) {
    res.write("<p> Bienvenue sur votre profile</p>")
    console.log("Vous êtes sur votre profile")
    res.end();
});

app.get("/accueil", function(req,res) {
    res.write("<p> Bienvenue à l'accueil! </p>")
    console.log("Vous êtes à l\'accueil")
    res.end();
});

app.listen(3001, function () {
  console.log('serveur créer');
});