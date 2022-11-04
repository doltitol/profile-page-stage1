import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Contact from './Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
