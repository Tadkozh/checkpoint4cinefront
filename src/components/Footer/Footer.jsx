import React from 'react';
import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <Link to="/film/creer">Nouveau film</Link>
      <Link to="/films">Films</Link>
      <Link to="/cineastes">Cinéastes</Link>
      <Link to="/cineaste/creer">Nouveau cinéaste</Link>
    </div>
    )
};

export default Footer;
