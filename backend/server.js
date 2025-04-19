require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
app.use(cors());

const port = 5000;

const API_KEY = process.env.API_KEY;
const PasswordDB = process.env.PASSWORDDB;

const leagueCodes = [
  "PL",
  "DED",
  "BSA",
  "PD",
  "FL1",
  "BL1",
  "PPL",
  "ELC",
  "WC",
  "CL",
  "EC",
];

const leagueRoutes = require("./routes/league");
const clubRoutes = require("./routes/club");
const f1Routes = require("./routes/f1");

const db = require("./db");

mongoose
  .connect(
    `mongodb+srv://szymondomagala:${PasswordDB}@cluster0.uugjt33.mongodb.net/Formula1`
  )
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

db.run(`CREATE TABLE IF NOT EXISTS clubs (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  short_name TEXT,
  crest TEXT
  )`);

db.run(`CREATE TABLE IF NOT EXISTS players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  age TEXT NOT NULL,
  nationality TEXT,
  position TEXT,
  club_id INTEGER NOT NULL
)`);

// GET all league bagdes
app.get("/leaguesBadges", async (req, res) => {
  try {

    const response = await fetch(
      "https://api.football-data.org/v4/competitions",
      {
        headers: { "X-Auth-Token": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    const filterLeagues = data.competitions.filter((league) =>
      leagueCodes.includes(league.code)
    );

    res.json(filterLeagues);

    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Błąd podczas pobierania danych" });
  }
});

//Wszystkie kluby z bazy
app.get("/clubs", (req, res) => {
  db.all(`SELECT * FROM clubs`, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.use(leagueRoutes);
app.use(clubRoutes);
app.use(f1Routes);

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
