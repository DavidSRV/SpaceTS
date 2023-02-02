import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Technology from "./pages/technology/Technology";
import { Destination } from "./pages/destination/Destination";
import Moon from "./pages/destination/pagesDestination/Moon";
import Titan from "./pages/destination/pagesDestination/Titan";
import Mars from "./pages/destination/pagesDestination/Mars";
import Europa from "./pages/destination/pagesDestination/Europa";
import MissionSpecialist from "./pages/crew/pagesCrew/MissionSpecialist";
import Commander from "./pages/crew/pagesCrew/Commander";
import Pilot from "./pages/crew/pagesCrew/Pilot";
import FlightEngineer from "./pages/crew/pagesCrew/FlightEngineer";
import Crew from "./pages/crew/Crew";
import LaunchVehicle from "./pages/technology/pagesTechnology/LaunchVehicle";
import SpacePort from "./pages/technology/pagesTechnology/SpacePort";
import SpaceCapsule from "./pages/technology/pagesTechnology/SpaceCapsule";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Destination/" element={<Destination />}>
          <Route path="Moon" element={<Moon />} />
          <Route path="Mars" element={<Mars />} />
          <Route path="Europa" element={<Europa />} />
          <Route path="Titan" element={<Titan />} />
        </Route>

        <Route path="/Crew/" element={<Crew />}>
          <Route path="Commander" element={<Commander />} />
          <Route path="MissionSpecialist" element={<MissionSpecialist />} />
          <Route path="Pilot" element={<Pilot />} />
          <Route path="FlightEngineer" element={<FlightEngineer />} />
        </Route>

        <Route path="/Technology/" element={<Technology />}>
          <Route path="LaunchVehicle" element={<LaunchVehicle />} />
          <Route path="SpacePort" element={<SpacePort />} />
          <Route path="SpaceCapsule" element={<SpaceCapsule />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
