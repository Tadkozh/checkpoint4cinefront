import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AuthorsList.css';

const AuthorsList = () => {
  return (
    <>
      <Header linkTo="/" backTo="&lt;" title="Cinéastes" />
      <main className="nopage-container">
        <div className="nopage-content">
          <div>AuthorsList</div>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default AuthorsList;
