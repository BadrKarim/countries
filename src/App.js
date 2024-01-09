import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        {/* le path * fonctionne si jamais l'url ne corespond à rien de déclaré au dessus */}
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;