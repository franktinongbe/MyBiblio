import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    axios
      .get('https://books-api-ov9a.onrender.com/api/books', {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erreur de recuperation des livres');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-success mt-1">Bienvenue sur la page d'accueil</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <div className="text-success">
          <h2>Books List:</h2>
          <ul>
            {books.map((book, index) => (
              <li key={index}>{book.title}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>
    </div>
  );
}

export default Home;
