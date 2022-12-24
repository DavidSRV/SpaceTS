import Home from './pages/home/Home';
import info from './utils/data.json';
import {Router, Routes} from 'react-router'


function App():JSX.Element {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
