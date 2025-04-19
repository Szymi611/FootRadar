import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BetsPage(){
  const {LeagueCode} = useParams()
  console.log(LeagueCode)

  const [matchday, setMatchday] = useState()
  const [matches, setMatches] = useState()

  //Getting matchday
  useEffect(() => {
    async function getMatchday(){
      try{
        const response = await fetch (`http://localhost:5000/matchday/${LeagueCode}`)

        if(!response.ok){
          throw new Error(`Error fetching matchday`)
        }
        const data = await response.json();
        console.log(data)
        setMatchday(data.matchday);
      }catch(err){
        console.error("Error fetching matchday", err)
      }
    }
    getMatchday();
  },[LeagueCode])

  //Getting matches
  useEffect(()=>{
    if(!matchday) return
    async function getMatches (){
      try{
        const response = await fetch(`http://localhost:5000/${LeagueCode}/matches?matchday=${matchday}`)

        if(!response.ok){
          throw new Error(`Error response during fetch of the matches`)
        }
        const data = await response.json();
        console.log(data)
        setMatches(matches)
      }catch(err){
        console.error('Error fetching matches', err)
      }
    }
    getMatches();
  }, [LeagueCode, matchday])

  return(
    <>
      <h1></h1>
    </>
  )
}