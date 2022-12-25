import Home from './pages/home/Home';
import info from './utils/data.json';
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import Crew from './pages/crew/Crew';
import Destination from './pages/destination/Destination';
import Technology from './pages/technology/Technology';


function App():JSX.Element {
  return (
    <div className="App">
      <NavBar/>
    <Routes  >
    <Route path='/' element={<Home/>} />
    <Route path='/' element={<Crew/>} />
    <Route path='/' element={<Destination/>} />
    <Route path='/' element={<Technology/>} />
    </Routes>
    </div>
  );
}

export default App;
