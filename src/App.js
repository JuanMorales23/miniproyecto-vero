import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Index from './components/Index';
import Page1 from './components/Page1';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/page1" element={<Page1 />} exact/>
          <Route path="/" element={<Index />} />          
        </Routes>
    </Router>
    </div>
  );
}

export default App;
