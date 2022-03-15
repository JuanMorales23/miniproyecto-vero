import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Index from './components/Index';
import Page1 from './components/Page1';
import Page2 from "./components/Page2";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/page1" element={<Page1 />} exact/>
          <Route path="/page2" element={<Page2 />} exact/>
          <Route path="/" element={<Index />} />          
        </Routes>
    </Router>
    </div>
  );
}

export default App;
