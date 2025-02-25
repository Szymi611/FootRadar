require("dotenv").config();
const express = require("express");

const sqlite3 = require("sqlite3").verbose();

const app = express();

const port = 5000;

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("❌ BŁĄD: Brak API_KEY w pliku .env");
  process.exit(1);
}

const db = new sqlite3.Database("scouting.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Połączono z bazą danych");
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


//Pobranie wszytskich klubów z ligi angielskiej
app.get("/EPLteams", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.football-data.org/v4/competitions/PL/teams",
      {
        headers: { "X-Auth-Token": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status}`);
    }

    const data = await response.json();

    for (let team of data.teams) {
      db.run(
        `INSERT OR IGNORE INTO clubs (id, name, short_name, crest) VALUES (?,?,?,?)`,
        [team.id, team.name, team.shor_name, team.crest],
        (err) => {
          if (err) {
            console.error(err.message);
          }
        }
      );
    }
    res.json({ message: "Kluby zapisane do bazy" });
  } catch {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Zawodnicy konktekretnego klubu znając id pobieranie
app.get("/players/:teamId", async (req, res) => {
  const teamId = req.params.teamId;

  try {
    const response = await fetch(
      `https://api.football-data.org/v4/teams/${teamId}`,
      {
        headers: { "X-Auth-Token": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status}`);
    }

    const data = await response.json();
    const players = data.squad;

    for (let player of players) {
      db.run(
        `INSERT OR IGNORE INTO players (name, age, nationality, position, club_id) VALUES (?, ?, ?, ?, ?)`,
        [
          player.name,
          player.dateOfBirth,
          player.nationality,
          player.position,
          teamId,
        ],
        (err) => {
          if (err) {
            console.error(err.message);
          }
        }
      );
    }

    res.json({ message: "Zawodnicy zapisani do bazy" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//Wszyscy zawodnicy z bazy
app.get("/players", (req, res) => {
  db.all(`SELECT * FROM players`, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

//Wszystkie kluby z bazy
app.get("/clubs", (req, res) => {
  db.all(`SELECT * FROM clubs`, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  }) 
})

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
