import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './AuthorsCreate.css';

const AuthorsCreate = () => {
  return (
    <>
      <Header linkTo="/" backTo="&lt;" title="Nouveau cinéaste" />
      <main className="nopage-container">
        <div className="nopage-content">
          <div>AuthorsCreate</div>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default AuthorsCreate;
