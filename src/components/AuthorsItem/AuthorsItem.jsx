import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AuthorsMovies from '../AuthorsMovies/AuthorsMovies';
import './AuthorsItem.css';

const AuthorsItem = () => {
  return (
    <>
      <Header linkTo="/" backTo="&lt;" title="[Nom cinéaste]"/>
      <main className="nopage-container">
        <div className="nopage-content">
          <div>
            AuthorsItem
            <AuthorsMovies />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default AuthorsItem;
