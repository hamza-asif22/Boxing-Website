
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/contact'; // Adjust path as per your folder structure

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default App;