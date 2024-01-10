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
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;