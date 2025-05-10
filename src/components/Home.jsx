import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
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
          Bienvenue dans votre univers documentaire
        </h1>
        <img src="https://i.pinimg.com/736x/da/c6/90/dac6908dc5a826b3bac34ab21bdd579c.jpg" alt="" />
       
      
        <div className="text">
          <p>Découvrez le monde à travers les livres. Evadez vous dans les lignes et vivez des moment de bonheur</p> <br /> <br />
          <img src="https://i.pinimg.com/736x/3c/4c/67/3c4c6701721f7031b95d5553c9e7122f.jpg" alt="" />
          <p>Nous vous proposons une large sélection de livres dans différents genres littéraires.</p>

        </div>


      </div>
    </>
  );
}

export default Home;
