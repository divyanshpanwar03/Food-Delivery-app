
import './App.css';
import Home from './Screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
