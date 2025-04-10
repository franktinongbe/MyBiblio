import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/partials/NavBar";
import Footer from "./components/partials/Footer";
import axios from 'axios'


function App() {

 
  axios.get('https://books-api-ov9a.onrender.com/api/books')
  .then(response => {console.log(response.data)})
  .catch(error => {console.log(error)})
  

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/Home" element={<Home />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
