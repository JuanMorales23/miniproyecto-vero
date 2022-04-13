import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Bones from "./components/Bones";
import Index from './components/Index';
import Neurocraneo from "./components/Neurocraneo";
import Viscerocraneo from "./components/Viscerocraneo";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:part" element={<Bones />} exact/>
          <Route path="/:part" element={<Bones />} exact/>
          <Route path="/neurocraneo/:bone" element={<Neurocraneo />} exact/>
          <Route path="/viscerocraneo/:bone" element={<Viscerocraneo />} exact/>
          <Route path="/" element={<Index />} />          
        </Routes>
    </Router>
    </div>
  );
}

export default App;
