import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Ativ01 from './components/Ativ01';
import Ativ02 from './components/Ativ02';
import Ativ03 from './components/Ativ03';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ativ01" element={<Ativ01 />} />
        <Route path="/Ativ02" element={<Ativ02 />} />
        <Route path="/Ativ03" element={<Ativ03 />} />
      </Routes>
    </Router>
  );
}

export default App;
