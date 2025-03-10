import ClubPage from "./components/ClubPageComponents/ClubPage";
import LeaguePage from "./components/LeaguePage";
import MainPage from "./components/MainPage"
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/league/:LeagueCode" element={<LeaguePage />} />
        <Route path="/club/:clubId" element={<ClubPage />} />
      </Routes>
    </>
  )
}

export default App
