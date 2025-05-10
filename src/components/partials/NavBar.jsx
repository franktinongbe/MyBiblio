import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <header className="d-flex justify-content-between align-items-center pt-2  text-light w-auto bg-primary px-5">
      <h1 className="fw-bold" style={{ fontFamily: "Times New Roman" }}>Bookplaces</h1>
      <nav className="d-flex gap-4">
        <Link
          className="text-light border border-light rounded px-3 py-1"
          style={{ fontFamily: "Times New Roman", textDecoration: "none", fontSize: "1.2rem" }}
          to="/Home"
        >
          Accueil
        </Link>
        <Link
          className="text-light border border-light rounded px-3 py-1"
          style={{ fontFamily: "Times New Roman", textDecoration: "none", fontSize: "1.2rem" }}
          to="/Sign in"
        >
          Inscription
        </Link>
        <Link
          className="text-light border border-light rounded px-3 py-1"
          style={{ fontFamily: "Times New Roman", textDecoration: "none", fontSize: "1.2rem" }}
          to="/Log in"
        >
          Connexion
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
