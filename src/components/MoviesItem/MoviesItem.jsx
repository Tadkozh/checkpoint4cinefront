import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MoviesItem.css';

const MoviesItem = () => {
  return (
  <>
    <Header linkTo="/" backTo="&lt;" title="[Titre film]" />
    <main className="nopage-container">
      <div className="nopage-content">
        <div>MoviesItem</div>
      </div>
    </main>
    <Footer />
  </>
  )
};

export default MoviesItem;
