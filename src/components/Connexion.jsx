import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import axios from 'axios'; // Import Axios for making HTTP requests

const Connexion = () => {
  const [error, setError] = useState(''); // State to store error messages
  const [email, setEmail] = useState(''); // State for storing email
  const [password, setPassword] = useState(''); // State for storing password

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Make the real API call here
      const response = await axios.post('https://books-api-ov9a.onrender.com/api/auth/login', {
        email, // Send email from state
        password, // Send password from state
      });

      // If registration is successful, show success message
      if (response.status === 200) {
        setError(''); // Clear any previous errors
        localStorage.setItem('authToken', response.data.token); // Store the token in localStorage
        // Redirect to Home page (or another page) after successful login
        window.location.href = '/home';
      }
    } catch (err) {
      // If something goes wrong, show an error message in French
      setError('Erreur lors de la connexion. Vérifiez vos identifiants et réessayez.');
    }
  };

  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center bg-light shadow-lg">
      <div className="card p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Connexion</h2>
          {/* Display error if any */}
          {error && <div className="alert alert-danger">{error}</div>}
          
          {/* Login form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state when user types
                required // Make this field required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state when user types
                required // Make this field required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Se connecter</button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <p className="mb-0">Pas de compte? <a href="/Sign in">S'inscrire</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
