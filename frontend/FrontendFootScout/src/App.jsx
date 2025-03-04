import Clubs from "./components/MPComponents/Clubs"
import MainPage from "./components/MainPage"
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/clubs/:LeagueCode" element={<Clubs />} />
        {/* <Clubs /> */}
      </Routes>
    </>
  )
}

export default App
