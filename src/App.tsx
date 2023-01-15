import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination";
import Technology from "./pages/technology/Technology";
import data from "./utils/data.json"
import { useState } from "react";
import { Iinfo } from "./utils/Idata";

function App(): JSX.Element {

  const [info,  setInfo] = useState<Iinfo["info"]>(data.info)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Crew" element={<Crew info={info}/>} />
        <Route path="/Destination" element={<Destination info={info}/>} />
        <Route path="/Technology" element={<Technology info={info}/>} />
      </Routes>
    </div>
  );
}

export default App;
