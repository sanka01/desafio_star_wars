import React from 'react';
import { createRoot } from 'react-dom/client'
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favoritos from './pages/Favoritos';


const domNode = document.getElementById('app')
const root = createRoot(domNode)
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favoritos />} />
      </Routes>
    </Router>
  </React.StrictMode>
)