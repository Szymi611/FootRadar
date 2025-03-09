import ClubPage from "./components/ClubPageComponents/ClubPage";
import Clubs from "./components/MPComponents/Clubs"
import MainPage from "./components/MainPage"
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/clubs/:LeagueCode" element={<Clubs />} />
        <Route path="/club/:clubId" element={<ClubPage />} />
      </Routes>
    </>
  )
}

export default App
