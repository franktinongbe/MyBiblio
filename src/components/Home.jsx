import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {

    const [books, setBooks] = useState([]); 
  
   
    useEffect(() => {
      fetch("https://books-api-ov9a.onrender.com/api-docs/") 
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err))
    }, []);

  return (
    <>
      <div className="container mt-5">
        <h1
          className="text-success mt-1"
        >
          Bienvenue sur la page d'accueil
        </h1>



      <ul>
        {books.map((list, index) => (
          <li key = {index} >{list.id} | {list.title}</li>
        ))}
      </ul>
      
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
