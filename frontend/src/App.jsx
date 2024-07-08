
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/contact';
import Pricing from './pages/pricing';
import Profile from './pages/profile';
import Swarmer from './pages/swarmer';
import Slugger from './pages/slugger';
import Outboxer from './pages/outboxer';
import Boxerpunch from './pages/boxerpunch';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swarmer" element={<Swarmer />} />
        <Route path="/slugger" element={<Slugger />} />
        <Route path="/outboxer" element={<Outboxer />} />
        <Route path="/boxerpunch" element={<Boxerpunch />} />
      </Routes>
  );
};

export default App;