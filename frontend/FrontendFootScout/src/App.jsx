import ClubPage from "./components/ClubPageComponents/ClubPage";
import LeaguePage from "./components/LeaguePage";
import MainPage from "./components/MainPage"
import F1Page from "./components/F1Components/F1Page";
import { Routes, Route } from "react-router-dom";
import About from "./components/NavbarComponents/About";
import OurBets from "./components/NavbarComponents/OurBets";
import BetsPage from "./components/BetsPage";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/league/:LeagueCode" element={<LeaguePage />} />
        <Route path="/club/:clubId" element={<ClubPage />} />
        <Route path="/f1" element={<F1Page/>}/>
        <Route path='/about' element={<About />}/>
        <Route path="/bets" element={<OurBets />}/>
        <Route path="/bets/:LeagueCode" element={<BetsPage />} />
      </Routes>
    </>
  )
}

export default App
