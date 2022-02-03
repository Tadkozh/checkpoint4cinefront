import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import NoPage from './components/NoPage/NoPage';
import './App.css';

const App = () => (

  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      
      </Routes>    
    </Router>
  </div>
);

export default App;
