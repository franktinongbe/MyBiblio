// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/partials/NavBar";
import Inscription from "./components/Inscription";
import Footer from "./components/partials/Footer";
import Connexion from "./components/Connexion";


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Log in" element={<Connexion />} />
      <Route path="/Sign in" element={<Inscription />} />

      </Routes>

      <Footer/>
    </Router>   
  );
}

export default App;
