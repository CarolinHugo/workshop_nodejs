const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/workshop',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const workshopSchema = new mongoose.Schema({
  id: { type: String, required: true },
  student: { type: String, required: true }
});

const Workshop = mongoose.model('Workshop', workshopSchema);

async function getAllWorkshops() {
  try {
    const workshops = await Workshop.find();
    return workshops;
  } catch (error) {
    console.error("Erreur lors de la récupération des ateliers :", error);
    throw error;
  }
}

app.get('/', function(req, res) {
  console.log("Coucou Noah!");
  res.end();
});

app.get('/Logo', function(req, res) {
  res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png" alt="logo epitech" width=750 height=500>');
  console.log("Vous êtes au logo");
  res.end();
});

app.get("/profile", function(req, res) {
  res.write("<p> Bienvenue sur votre profile</p>");
  console.log("Vous êtes sur votre profile");
  res.end();
});

app.get("/accueil", function(req, res) {
  res.write("<p> Bienvenue à l'accueil! </p>");
  console.log("Vous êtes à l'accueil");
  res.end();
});

app.get("/workshops", async function(req, res) {
  try {
    const workshops = await getAllWorkshops();
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des ateliers" });
  }
});

app.listen(3001, function() {
  console.log('serveur créer');
});
