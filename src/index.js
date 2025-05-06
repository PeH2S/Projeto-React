import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MinhasRotas from './minhasRotas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MinhasRotas />
  </BrowserRouter>
);
