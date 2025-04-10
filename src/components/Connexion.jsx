import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      // Simuler un appel à une API de connexion (à remplacer plutard)
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'test@example.com' && password === 'password') {
            resolve({ success: true, message: 'Connexion réussie!' });

            // Stocker le token et rediriger l'utilisateur
          } else {
            reject({ success: false, message: 'Email ou mot de passe incorrect.' });
          }
        }, 1000);
      });

      console.log('Réponse de la connexion:', response);
      if (response.success) {
        alert(response.message);
        // Redirection de l'utilisateur vers la page des livres/auteurs, etc.
        // history.push('/livres');
      }
    } catch (err) {
      setError(err.message || 'Erreur lors de la connexion.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Connexion</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Se connecter</button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <p className="mb-0">Pas de compte? <a href="/Log in">S'inscrire</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;