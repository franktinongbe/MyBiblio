import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/partials/NavBar";
import Footer from "./components/partials/Footer";


function App() {
  const [books, setBooks] = useState([]); 

 
  useEffect(() => {
      fetch("https://books-api-ov9a.onrender.com/api-docs/") 
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err))
    }, []);

  

  return (
    <Router>
      <Navbar />
      <SiBar />
      <Routes>
      <Route path="/Home" element={<Home books={books} />} />
      <Route path="/Sign in" element={<Connexion />} />
      <Route path="/Log in" element={<Inscription />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
