import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

function Home() {
  
   
    axios.get('https://books-api-ov9a.onrender.com/api/books')
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error)})

  return (
    <>
      <div className="container mt-5">
        <h1
          className="text-success mt-1"
        >
          Bienvenue sur la page d'accueil
        </h1>


      
        <div className="text-danger">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
      </div>
    </>
  );
}

export default Home;
