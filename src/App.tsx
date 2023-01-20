import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination";
import Technology from "./pages/technology/Technology";
import { useState } from "react";

export interface IDestination {
  destination: {
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance: string;
    travel: string;
  }[];
}

function App(): JSX.Element {

  const [destination, setDestination] = useState<IDestination["destination"]>([
    {
      name: "Moon",
      images: {
        png: "../../assets/destination/image-moon.png",
        webp: "../../assets/destination/image-moon.webp",
      },
      description:
        "See our planet as youve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "../../assets/destination/image-mars.png",
        webp: "../../assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "../../assets/destination/image-europa.png",
        webp: "../../assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Crew" element={<Crew  />} />
        <Route
          path="/Destination"
          element={<Destination destination={destination} />}
        />
        <Route path="/Technology" element={<Technology  />} />
      </Routes>
    </div>
  );
}

export default App;
