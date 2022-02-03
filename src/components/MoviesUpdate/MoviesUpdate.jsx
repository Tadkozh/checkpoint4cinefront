import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MoviesUpdate.css';

const MoviesUpdate = () => {
  return (
  <>
    <Header linkTo="/" backTo="&lt;" title="Mise à jour d'un film" />
    <main className="nopage-container">
      <div className="nopage-content">
        <div>MoviesUpdate</div>
      </div>
    </main>
    <Footer />
  </>
  )
};

export default MoviesUpdate;
