

exports.getDriver = async (req, res, next) => {
  try{
    const response = await fetch('https://api.openf1.org/v1/drivers?session_key=latest')

    if(!response.ok){
      throw new Error(`Error API: ${response.status}`);
    }
    const data = await response.json();

    res.json(data)
  }catch(err){
    console.error(err)
    res.status(500).json({ error: err.message });
  }
}

exports.getLatestMeeting = async (req, res, next) => {
  try{
    const response = await fetch('https://api.openf1.org/v1/meetings?meeting_key=latest')

    if(!response.ok){
      throw new Error(`Error API: ${response.status}`);
    }

    const data = await response.json();
    res.json(data)

  }catch(err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
}

exports.getAllSessions = async (req, res, next) => {
  const year = req.params.year;

  try{
    const response = await fetch(`https://api.openf1.org/v1/sessions?year=${year}`)

    if(!response.ok){
      throw new Error(`Error API: ${response.status}`)
    }

    const data = await response.json()
    res.json(data)
  }catch(err){
    console.error(err)
    res.status(500).json({error: err.message})
  }
}

exports.getAllIncidents = async (req, res, next) => {
  try{
    const response = await fetch('https://api.openf1.org/v1/race_control?session_key=latest&meeting_key=latest')

    if(!response.ok){
      throw new Error(`Error API: ${response.status}`)
    }

    const data = await response.json();
    res.json(data)

  }catch{
    console.error(err)
    res.status(500).json({error: err.message})
  }
}