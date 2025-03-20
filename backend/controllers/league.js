const API_KEY = process.env.API_KEY;

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

const db = require('../db')

exports.getLeagueTable = async (req, res, next) => {
  const leagueCode = req.params.leagueCode.toUpperCase();

  try {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/${leagueCode}/standings`,
      {
        headers: { "X-Auth-Token": API_KEY },
      }
    );
    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data.standings[0].table);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Błąd podczas pobierania danych" });
  }
};

exports.getLeagueScorers = async (req, res, next) => {
  const leagueCode = req.params.leagueCode.toUpperCase();
  try {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/${leagueCode}/scorers`,
      {
        headers: { "X-Auth-Token": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data.scorers);
    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Błąd podczas pobierania danych" });
  }
};

exports.getLeagueMatches = async (req, res, next) => {
  const leagueCode = req.params.leagueCode.toUpperCase();
  const matchday = req.query.matchday;

  if (!matchday) {
    return res.status(400).json({ error: "Brak parametru matchday" });
  }

  try {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/${leagueCode}/matches?matchday=${matchday}`,
      {
        headers: { "X-Auth-Token": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data.matches);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Błąd podczas pobierania danych" });
  }
};

exports.getLeagueTeams = async (req, res, next) => {
  const leagueCode = req.params.leagueCode.toUpperCase();
  try {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/${leagueCode}/teams`,
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
        [team.id, team.name, team.short_name, team.crest],
        (err) => {
          if (err) {
            console.error(err.message);
          }
        }
      );
    }
    res.json(data.teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getLeagueMatchday = async (req, res, next) => {
  const leagueCode = req.params.leagueCode.toUpperCase();
  try {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/${leagueCode}`,
      {
        headers: { "X-Auth-Token": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status}`);
    }
    const data = await response.json();
    const currentMatchday = data.currentSeason.currentMatchday;

    res.json({ matchday: currentMatchday });
    console.log(currentMatchday);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
