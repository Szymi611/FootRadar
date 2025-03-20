const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("scouting.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Połączono z bazą danych");
});

module.exports = db;