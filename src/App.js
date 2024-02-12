import './App.css';
import HomePage from './page/Home';
import DramaPage from './page/Drama';
import ActionPage from './page/Action';
import HorrorPage from './page/Horror';
import FooterComponent from './component/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './stylesheet.css';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/action' element= {<ActionPage />} />
          <Route path='/cartoon' element= {<DramaPage />} />
          <Route path='/horror' element= {<HorrorPage />} />
        </Routes>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
