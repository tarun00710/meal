import { Route, Routes } from 'react-router-dom';
import './App.css';
import Days from './Days';
import EachDay from './EachDay';
import Homepage from './Homepage';


function App() {
  return (
    <div className="App">
    
    <Routes>
    <Route path="/" element={<Homepage/>} />
        <Route path="/:classes/days" element={<Days/>} />
        <Route path='/class/:classes/days/:days/studentNo/:number' element={<EachDay/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
