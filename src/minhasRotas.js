import { Routes, Route } from 'react-router-dom';
import Home           from './Home';
import Ativ01         from './Ativ01';
import Ativ02         from './Ativ02';
import Ativ03         from './Ativ03';
import Ativ04         from './Ativ04';
import Letreiro       from './Letreiro';
import Relogio        from './Relogio';

export default function MinhasRotas() {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/Ativ01"  element={<Ativ01 />} />
        <Route path="/Ativ02"  element={<Ativ02 />} />
        <Route path="/Ativ03"  element={<Ativ03 />} />
        <Route path="/Ativ04"  element={<Ativ04 />} />
        <Route path="/letreiro" element={<Letreiro />} />
        <Route path="/relogio"  element={<Relogio />} />
      </Routes>
    </div>
  );
}

