import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination";
import Technology from "./pages/technology/Technology";
import { Idata } from "./utils/Idata";
import data from './utils/data.json'
import { useState } from "react";

function App(): JSX.Element {

  const [crew, setCrew] = useState()

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
