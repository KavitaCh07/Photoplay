import React from 'react';
import './App.css';
import Home from './views/home/home';
import { Routes, Route } from "react-router-dom";
import Pmodal from './components/pmodal/pmodal';
import Photos from './components/photos/photos';
import Videos from './components/videos/videos';
import Favourites from './components/favourites/favourites';

function App() {
  return (
    <Home/>
  //   <Routes>
  //   <Route path="/pmodal" element={<Pmodal />} />
  // </Routes>
  );
}

export default App;
