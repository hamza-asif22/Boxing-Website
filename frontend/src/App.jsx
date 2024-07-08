
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/contact';
import Pricing from './pages/pricing';
import Profile from './pages/profile';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
};

export default App;