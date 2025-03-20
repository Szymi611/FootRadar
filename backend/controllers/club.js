const API_KEY = process.env.API_KEY

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

exports.getClubPlayers = async (req, res, next) => {
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

    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

exports.getClubMatches = async (req, res, next) => {
  const teamId = req.params.teamId;

  try{
    const response = await fetch(`https://api.football-data.org/v4/teams/${teamId}/matches/`, {
      headers: {"X-Auth-Token": API_KEY}
    });

    if(!response.ok){
      throw new Error(`Błąd API: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
    console.log(data);

  }catch(err){
    console.error(err);
    res.status(500).json({error: err.message});
  }
}

exports.getClub = async (req, res, next) => {
  const teamId = req.params.teamId;
  try{
    const response = await fetch(`https://api.football-data.org/v4/teams/${teamId}`, {
      headers: {"X-Auth-Token": API_KEY}
    })

    if(!response.ok){
      throw new Error(`Błąd API: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);

  }catch(err){
    console.error(err);
    res.status(500).json({error: err.message});
  }
}

exports.getClubCrest = async (req, res, next) => {
  const teamId = req.params.teamId;

  try{
    const response = await fetch(`https://api.football-data.org/v4/teams/${teamId}`, {
      headers: {"X-Auth-Token": API_KEY}
    })

    if(!response.ok){
      throw new Error(`Błąd API: ${response.status}`);
    }

    const data = await response.json();
    res.json({crest: data.crest, coach: data.coach});


  }catch(err){
    console.error(err)
    res.status(500).json({error: err.message});
  }
}