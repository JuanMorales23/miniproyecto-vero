import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import './App.css';
import Bones from "./components/Bones";
import Frontal from "./components/Frontal";
import Index from './components/Index';
import Neurocraneo from "./components/Neurocraneo";
import Viscerocraneo from "./components/Viscerocraneo";


function App() {

  /*
            <Route path="/:part" element={<Bones />} exact/>
                      <Route path="/neurocraneo/:bone" element={<Neurocraneo />} exact/>

  */
  return (
    <div className="App">
      <div>
      <Router>
        <Routes>
          <Route path="/neurocraneo/frontal" element={<Frontal />} exact/>

          <Route path="/viscerocraneo/:bone" element={<Viscerocraneo />} exact/>
          <Route path="/" element={<Index />} />          
        </Routes>
    </Router>
      </div>
    </div>
  );
}

export default App;
