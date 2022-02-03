import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MoviesCreate.css';

const MoviesCreate = () => {
  return (
    <>
      <Header linkTo="/" backTo="&lt;" title="Nouveau film" />
      <main className="nopage-container">
        <div className="nopage-content">
          <div>MoviesCreate</div>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default MoviesCreate;